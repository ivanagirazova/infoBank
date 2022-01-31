package mk.finki.ukim.navigation.Repository;

import mk.finki.ukim.navigation.Model.BankImages;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface BankImageRepository extends CrudRepository<mk.finki.ukim.navigation.Model.BankImages, String> {
    @Override
    List<mk.finki.ukim.navigation.Model.BankImages> findAll();

    BankImages findBankImagesByName(String name);
}
