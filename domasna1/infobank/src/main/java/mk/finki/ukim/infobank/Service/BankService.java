package mk.finki.ukim.infobank.Service;

import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Repository.BankRepository;
import mk.finki.ukim.infobank.Components.Filters.Filters;
import mk.finki.ukim.infobank.Components.HTTP.OverpassHttpRequest;
import mk.finki.ukim.infobank.Components.Pipe.Pipe;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class BankService{
    private final BankRepository bankRepository;

    public BankService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    public void saveElement(Map<String,String> element)
    {
        bankRepository.save(new BankEntity(element));
    }

    public void updateBankData()
    {
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

        List<Map<String,String>> bankData = (List<Map<String, String>>) getDataPipe.PerformOperations(bankInputStream);
        List<Map<String,String>> atmData = (List<Map<String, String>>) getDataPipe.PerformOperations(atmInputStream);

        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
    }

    public List<BankEntity> getBanks()
    {
        List<BankEntity> list = new ArrayList<>();
        bankRepository.findAll().forEach(list::add);
        return list;
    }
}
