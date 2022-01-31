package mk.finki.ukim.navigation.Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import mk.finki.ukim.navigation.Model.enumerations.BankType;
import org.springframework.data.annotation.Id;
import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class BankEntity extends LocationInfo {

    @Id
    private String id;
    private BankType type;
    private String name;
    private Map<String, String> details;

    @PostConstruct
    private void postConstruct() {
        details = new HashMap<>();
    }

    public BankEntity(Map<String, String> data) {
        HashMap<String, String> detailsCopy = new HashMap<>(data);
        id = detailsCopy.remove("id");
        name = detailsCopy.remove("name");
        type = BankType.valueOf(detailsCopy.remove("amenity"));
        lon = Double.parseDouble(detailsCopy.get("lon"));
        lat = Double.parseDouble(detailsCopy.get("lat"));
        details = detailsCopy;
        detailsCopy.remove("lat");
        detailsCopy.remove("lon");
    }
}
