package mk.finki.ukim.infobank.Components.Filters;

import mk.finki.ukim.infobank.DTO.XmlDto;
import mk.finki.ukim.infobank.Components.GroupBankNames;
import mk.finki.ukim.infobank.Components.Pipe.IFilter;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import java.io.*;
import java.util.*;

import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;


public class Filters {
    public static IFilter<InputStream, Document> CreateDocument = (x) -> {
        try {
            return DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(x);
        } catch (SAXException | IOException | ParserConfigurationException e) {
            return null;
        }
    };
    public static IFilter<Document, List<XmlDto>> CreateElement = (x) ->
    {
        XmlDto xmlDto = new XmlDto();
        listTree(x.getDocumentElement(), 0, xmlDto);
        return xmlDto.subElements;
    };

    public static IFilter<List<XmlDto>, List<XmlDto>> SkipFirstElement = (x) ->
            x.stream().skip(1).collect(Collectors.toList());

    public static IFilter<List<XmlDto>, List<Map<String,String>>> ElementToMap = (x) -> x.stream().map(y->y.map).collect(Collectors.toList());

    public static IFilter<List<Map<String,String>>, List<Map<String,String>>> changeFieldsToName = (x) -> {
        x.stream().filter(y -> !y.containsKey("name")).filter(y -> y.containsKey("operator")).forEach(y -> y.put("name", y.get("operator")));
        x.stream().filter(y -> !y.containsKey("name")).filter(y -> y.containsKey("name:en")).forEach(y -> y.put("name", y.get("name:en")));
        return x;
    };

    public static IFilter<List<Map<String,String>>, List<Map<String,String>>> removeNullAndDistinct = (x) ->
            x.stream().filter(y -> y.containsKey("name") && y.containsKey("id") && y.containsKey("lon") && y.containsKey("lat")).filter(distinctByKey(z -> z.get("id"))).collect(Collectors.toList());

    public static IFilter<List<XmlDto>, List<XmlDto>> flatFilter = (x) ->
            x.stream().peek(y -> {
                HashMap<String, String> map = new HashMap<>();
                for (int i = 0; i < y.subElements.size(); i++) {
                    map.putAll(y.subElements.get(i).map);
                }
                y.subElements = new ArrayList<>();
                y.map.putAll(map);
            }).collect(Collectors.toList());

    public static IFilter<List<XmlDto>, List<XmlDto>> printElements = (x) ->
    {
        x.stream().skip(1).forEach(System.out::println);
        return x;
    };

    public static IFilter<List<Map<String,String>>,List<Map<String,String>>> filterBanks = (x) ->
    {
        for (var query : GroupBankNames.queries.entrySet())
        {
            List<String> key = query.getKey();
            String value = query.getValue();
            x.stream().filter(z-> key.stream().anyMatch(y->z.get("name").contains(y))).forEach(y->y.replace("name",value));
        }
        return x.stream().filter(z-> GroupBankNames.noBanks.stream().noneMatch(y->z.get("name").contains(y))).collect(Collectors.toList());
    };

    public static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Set<Object> seen = ConcurrentHashMap.newKeySet();
        return t -> seen.add(keyExtractor.apply(t));
    }

    private static void listTree(Node currNode, int tabCtr, XmlDto currXmlDto)
    {
        if (currNode.hasAttributes())
        {
            List<Node> keyvalues = new ArrayList<>();
            for (int i=0;i<currNode.getAttributes().getLength();i++)
            {
                keyvalues.add(currNode.getAttributes().item(i));
            }

            if (currNode.getNodeName().equals("tag")) {
                currXmlDto.map.put(keyvalues.get(0).getNodeValue(), keyvalues.get(1).getNodeValue());
            }
            else {
                keyvalues.forEach(x -> currXmlDto.map.put(x.getNodeName(), x.getNodeValue()));
            }
        }
        if (currNode.hasChildNodes())
            for (int i=0;i<currNode.getChildNodes().getLength();i++) {
                XmlDto subXml = new XmlDto();
                listTree(currNode.getChildNodes().item(i), tabCtr + 1, subXml);

                if (!(subXml.map.entrySet().isEmpty() && subXml.subElements.isEmpty()))
                    currXmlDto.subElements.add(subXml);
            }
    }
}