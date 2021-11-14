package mk.finki.ukim.infobank.Service;

import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Repository.BankRepository;
import org.springframework.stereotype.Service;

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
}
