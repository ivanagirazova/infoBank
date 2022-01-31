package mk.finki.ukim.datafetchosm.Service;

import mk.finki.ukim.datafetchosm.Model.BankEntity;
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

    public List<BankEntity> getAll() {
        return bankRepository.findAll();
    }

    public void updateBankData() {
        InputStream bankInputStream = null;
        InputStream atmInputStream = null;
        try {
            bankInputStream = OverpassHttpRequest.httpRequest(OverpassHttpRequest.bankQuery);
            atmInputStream = OverpassHttpRequest.httpRequest(OverpassHttpRequest.atmQuery);
        } catch (IOException | ParserConfigurationException | SAXException e) {
            e.printStackTrace();
        }

        Pipe getDataPipe = new Pipe();
        getDataPipe.addFilter(Filters.CreateDocument);
        getDataPipe.addFilter(Filters.CreateElement);
        getDataPipe.addFilter(Filters.SkipFirstElement);
        getDataPipe.addFilter(Filters.flatFilter);
        getDataPipe.addFilter(Filters.ElementToMap);
        getDataPipe.addFilter(Filters.changeFieldsToName);
        getDataPipe.addFilter(Filters.removeNullAndDistinct);
        getDataPipe.addFilter(Filters.filterBanks);

        List<Map<String, String>> bankData = (List<Map<String, String>>) getDataPipe.PerformOperations(bankInputStream);
        List<Map<String, String>> atmData = (List<Map<String, String>>) getDataPipe.PerformOperations(atmInputStream);

        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
    }

}
