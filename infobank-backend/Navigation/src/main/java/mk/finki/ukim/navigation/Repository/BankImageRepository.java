package mk.finki.ukim.navigation.Repository;

import mk.finki.ukim.navigation.Model.BankImages;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankImageRepository extends CrudRepository<BankImages, String> {
    @Override
    List<BankImages> findAll();
    BankImages findBankImagesByName(String name);
}
