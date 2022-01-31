package mk.finki.ukim.navigation.Service;

import mk.finki.ukim.navigation.Model.BankImages;
import mk.finki.ukim.navigation.Repository.BankImageRepository;
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
