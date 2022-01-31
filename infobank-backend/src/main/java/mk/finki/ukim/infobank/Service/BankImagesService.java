package mk.finki.ukim.infobank.Service;

import mk.finki.ukim.infobank.Model.BankImages;
import mk.finki.ukim.infobank.Repository.BankImageRepository;
import org.springframework.stereotype.Service;

@Service
public class BankImagesService {

    private final BankImageRepository bankImageRepository;

    public BankImagesService(BankImageRepository bankImageRepository) {
        this.bankImageRepository = bankImageRepository;
    }

    public BankImages findByName(String name) {
        return this.bankImageRepository.findBankImagesByName(name);
    }
}
