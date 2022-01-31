package mk.finki.ukim.datafetchosm.Service;

import mk.finki.ukim.datafetchosm.Components.Utility.BankPipeSingleton;
import mk.finki.ukim.datafetchosm.Components.Utility.BankUtility;
import mk.finki.ukim.datafetchosm.Model.BankEntity;
import mk.finki.ukim.datafetchosm.Model.enumerations.BankType;
import mk.finki.ukim.datafetchosm.Repository.BankRepository;
import mk.finki.ukim.datafetchosm.Components.Filters.Filters;
import mk.finki.ukim.datafetchosm.Components.HTTP.OverpassHttpRequest;
import mk.finki.ukim.datafetchosm.Components.Pipe.Pipe;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;

@Service
public class BankService {
    private final BankRepository bankRepository;

    public BankService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    public void saveElement(Map<String, String> element) {
        bankRepository.save(new BankEntity(element));
    }

    @SuppressWarnings("unchecked")
    public void updateBankData() throws IOException, ParserConfigurationException, SAXException {
        List<Map<String, String>> bankData = (List<Map<String, String>>) BankPipeSingleton.getInstance()
                .PerformOperations(BankUtility.getHttpBankData(BankType.bank));
        List<Map<String, String>> atmData = (List<Map<String, String>>) BankPipeSingleton.getInstance()
                .PerformOperations(BankUtility.getHttpBankData(BankType.atm));
        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
    }

}
