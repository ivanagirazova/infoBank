package mk.finki.ukim.infobank.Components;

import mk.finki.ukim.infobank.Service.BankService;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class OnStartUpdateDB implements ApplicationListener<ApplicationReadyEvent> {

    private final BankService bankService;

    public OnStartUpdateDB(BankService bankService) {
        this.bankService = bankService;
    }

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        bankService.updateBankData();
    }
}