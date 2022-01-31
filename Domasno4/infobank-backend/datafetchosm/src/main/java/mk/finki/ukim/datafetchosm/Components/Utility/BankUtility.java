package mk.finki.ukim.datafetchosm.Components.Utility;

import mk.finki.ukim.datafetchosm.Components.HTTP.OverpassHttpRequest;
import mk.finki.ukim.datafetchosm.Model.enumerations.BankType;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;

public class BankUtility {

    public static InputStream getHttpBankData(BankType type) throws IOException, ParserConfigurationException, SAXException {
        if(type == BankType.bank) {
            return OverpassHttpRequest.httpRequest(OverpassHttpRequest.bankQuery);
        }
        else {
            return OverpassHttpRequest.httpRequest(OverpassHttpRequest.atmQuery);
        }
    }

}
