package mk.finki.ukim.infobank.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class BankImages {
    @Id
    private String id;
    private String name;
    private String bank;
    private String atm;
}
