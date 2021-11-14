package mk.finki.ukim.infobank.Components;

import mk.finki.ukim.infobank.DTO.BankAtmDto;
import mk.finki.ukim.infobank.Service.BankService;
import mk.finki.ukim.infobank.UpdateDB.UpdateDBEvent;
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
        BankAtmDto banksAndAtms = UpdateDBEvent.updateDB();
        banksAndAtms.banks.forEach(bankService::saveElement);
        banksAndAtms.atms.forEach(bankService::saveElement);
    }
}