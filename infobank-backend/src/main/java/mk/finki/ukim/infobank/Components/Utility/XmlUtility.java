package mk.finki.ukim.infobank.Components.Utility;

import mk.finki.ukim.infobank.DTO.XmlDto;
import org.w3c.dom.Node;

import java.util.ArrayList;
import java.util.List;

public class XmlUtility {

    /**
     * Creates the bank and atm entities
     *
     * @Usage Converts XML to XmlDto by iterating through the
     * child elements recursively and adds them to the XmlDto
     *
     */
    public static void convertDocumentToXmlDto(Node currNode, int tabCtr, XmlDto currXmlDto) {
        if (currNode.hasAttributes()) {
            List<Node> keyValues = new ArrayList<>();
            for (int i = 0; i < currNode.getAttributes().getLength(); i++) {
                keyValues.add(currNode.getAttributes().item(i));
            }
            if (currNode.getNodeName().equals("tag")) {
                currXmlDto.map.put(keyValues.get(0).getNodeValue(), keyValues.get(1).getNodeValue());
            } else {
                keyValues.forEach(keyValue -> currXmlDto.map.put(keyValue.getNodeName(), keyValue.getNodeValue()));
            }
        }
        if (currNode.hasChildNodes())
            for (int i = 0; i < currNode.getChildNodes().getLength(); i++) {
                XmlDto subXml = new XmlDto();
                convertDocumentToXmlDto(currNode.getChildNodes().item(i), tabCtr + 1, subXml);

                if (!(subXml.map.entrySet().isEmpty() && subXml.subElements.isEmpty()))
                    currXmlDto.subElements.add(subXml);
            }
    }
}
