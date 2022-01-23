package mk.finki.ukim.infobank.Repository;

import mk.finki.ukim.infobank.Model.BankImages;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface BankImageRepository extends CrudRepository<BankImages, String> {
    BankImages findBankImagesByName(String name);
}
