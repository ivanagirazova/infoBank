package mk.finki.ukim.datafetchosm.Components.Filters;

import mk.finki.ukim.datafetchosm.DTO.XmlDto;
import mk.finki.ukim.datafetchosm.Components.GroupBankNames;
import mk.finki.ukim.datafetchosm.Components.Pipe.IFilter;
import org.w3c.dom.Node;
import mk.finki.ukim.infobank.Components.Utility.PredicateUtility;
import mk.finki.ukim.infobank.Components.Utility.XmlUtility;
import mk.finki.ukim.infobank.DTO.XmlDto;
import mk.finki.ukim.infobank.Components.GroupBankNames;
import mk.finki.ukim.infobank.Components.Pipe.IFilter;
import org.xml.sax.SAXException;
import java.io.*;
import java.util.*;
import java.util.stream.Collectors;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;


public class Filters {

    public static IFilter<InputStream, Document> CreateDocument = (inputStream) -> {
        try {
            return DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(inputStream);
        } catch (SAXException | IOException | ParserConfigurationException e) {
            return null;
        }
    };

    public static IFilter<Document, List<XmlDto>> CreateElement = (document) -> {
        XmlDto xmlDto = new XmlDto();
        XmlUtility.convertDocumentToXmlDto(document.getDocumentElement(), 0, xmlDto);
        return xmlDto.subElements;
    };

    public static IFilter<List<XmlDto>, List<XmlDto>> SkipFirstElement = (xmlDtoList) ->
            xmlDtoList.stream().skip(1).collect(Collectors.toList());

    public static IFilter<List<XmlDto>, List<Map<String, String>>> ElementToMap = (xmlDtoList) ->
            xmlDtoList.stream().map(listItem -> listItem.map).collect(Collectors.toList());

    /**
     * Renames different naming strategies of banks to "name"
     */
    public static IFilter<List<Map<String, String>>, List<Map<String, String>>> renameNameAnomalyProperties = (mapList) -> {
        mapList.stream()
                .filter(listItem -> !listItem.containsKey("name"))
                .filter(listItem -> listItem.containsKey("operator"))
                .forEach(listItem -> listItem.put("name", listItem.get("operator")));
        mapList.stream()
                .filter(listItem -> !listItem.containsKey("name"))
                .filter(listItem -> listItem.containsKey("name:en"))
                .forEach(listItem -> listItem.put("name", listItem.get("name:en")));
        return mapList;
    };

    /**
     * Removes invalid bank and atm elements from the list
     *
     * @returns List<Map < String, String>>
     */
    public static IFilter<List<Map<String, String>>, List<Map<String, String>>> removeNullAndDistinct = (mapList) ->
            mapList.stream().filter(listItem -> listItem.containsKey("name") && listItem.containsKey("id") && listItem.containsKey("lon") && listItem.containsKey("lat"))
                    .filter(PredicateUtility.distinctByKey(listItem -> listItem.get("id"))).collect(Collectors.toList());

    /**
     * Maps XmlDto child elements to siblings of XmlDto
     */
    public static IFilter<List<XmlDto>, List<XmlDto>> flatFilter = (xmlDtoList) ->
            xmlDtoList.stream().peek(listItem -> {
                HashMap<String, String> map = new HashMap<>();
                for (int i = 0; i < listItem.subElements.size(); i++) {
                    map.putAll(listItem.subElements.get(i).map);
                }
                listItem.subElements = new ArrayList<>();
                listItem.map.putAll(map);
            }).collect(Collectors.toList());

    /**
     * Puts the same name for the bank branches and atms of one bank
     *
     * @returns the list of entities
     */
    public static IFilter<List<Map<String, String>>, List<Map<String, String>>> filterBanks = (mapList) -> {
        for (var query : GroupBankNames.queries.entrySet()) {
            List<String> key = query.getKey();
            String value = query.getValue();
            mapList.stream().filter(listItem -> key.stream().anyMatch(k -> listItem.get("name").contains(k)))
                    .forEach(listItem -> listItem.replace("name", value));
        }
        return mapList.stream().filter(listItem -> GroupBankNames.noBanks.stream().noneMatch(k -> listItem.get("name").contains(k)))
                .collect(Collectors.toList());
    };

}