package mk.finki.ukim.datafetchosm.Components;

import mk.finki.ukim.datafetchosm.Service.BankService;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

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
        bankService.updateBankData();
        System.out.println("FINISHED UPDATING DATABASE");
    }
}
