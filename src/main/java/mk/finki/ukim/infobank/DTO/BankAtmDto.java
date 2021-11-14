package mk.finki.ukim.infobank.DTO;

import java.util.List;
import java.util.Map;

public class BankAtmDto {
    public List<Map<String,String>> banks;
    public List<Map<String,String>> atms;

    public BankAtmDto(List<Map<String,String>> banks, List<Map<String,String>> atms) {
        this.banks = banks;
        this.atms = atms;
    }
}
