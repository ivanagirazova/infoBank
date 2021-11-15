package mk.finki.ukim.infobank.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class BankEntity {
    @Id
    private String id;
    private String type;
    private String name;
    private double lon;
    private double lat;
    private Map<String,String> details;

    public BankEntity(Map<String,String> data) {
        HashMap<String,String> detailsCopy = new HashMap<>(data);
        id = detailsCopy.remove("id");
        name = detailsCopy.remove("name");
        type = detailsCopy.remove("amenity");
        lon = Double.parseDouble(detailsCopy.get("lon"));
        lat = Double.parseDouble(detailsCopy.get("lat"));
        details = detailsCopy;
        detailsCopy.remove("lat");
        detailsCopy.remove("lon");
    }
}
