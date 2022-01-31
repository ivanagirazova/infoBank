package mk.finki.ukim.datafetchosm.DTO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class XmlDto {
    public Map<String, String> map;
    public List<XmlDto> subElements;

    public XmlDto() {
        map = new HashMap<>();
        subElements = new ArrayList<>();
    }

    @Override
    public String toString() {
        return map.entrySet().stream()
                .map(x -> x.getKey() + "=" + x.getValue()).collect(Collectors.joining(" ")) + " " +
                subElements.stream().map(XmlDto::toString).collect(Collectors.joining(" ", "", "\n"));
    }
}