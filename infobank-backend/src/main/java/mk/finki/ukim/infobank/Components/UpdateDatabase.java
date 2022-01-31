package mk.finki.ukim.infobank.Components;

import mk.finki.ukim.infobank.Service.BankService;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

@Component
@EnableScheduling
public class UpdateDatabase {

    private final BankService bankService;

    public UpdateDatabase(BankService bankService) {
        this.bankService = bankService;
    }

    @Scheduled(cron = "@monthly")
    public void updateDatabase() {
        System.out.println("UPDATING DATABASE");
        try {
            bankService.updateBankData();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        }
        System.out.println("FINISHED UPDATING DATABASE");
    }
}
