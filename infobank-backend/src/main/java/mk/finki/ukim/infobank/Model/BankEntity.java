package mk.finki.ukim.infobank.Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class BankEntity extends LocationInfo {
    @Id
    private String id;
    private String type;
    private String name;
    private Map<String,String> details;

    @PostConstruct
    private void postConstruct()
    {
        details = new HashMap<>();
    }

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
