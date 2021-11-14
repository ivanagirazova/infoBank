package mk.finki.ukim.infobank.UpdateDB;

import mk.finki.ukim.infobank.DTO.BankAtmDto;
import mk.finki.ukim.infobank.UpdateDB.Filters.Filters;
import mk.finki.ukim.infobank.UpdateDB.HTTP.OverpassHttpRequest;
import mk.finki.ukim.infobank.UpdateDB.Pipe.Pipe;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

public class UpdateDBEvent {
    public static BankAtmDto updateDB()
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

        return new BankAtmDto(bankData,atmData);
    }
}
