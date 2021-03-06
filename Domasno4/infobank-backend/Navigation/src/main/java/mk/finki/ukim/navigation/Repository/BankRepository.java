package mk.finki.ukim.navigation.Repository;

import mk.finki.ukim.navigation.Model.BankEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankRepository extends CrudRepository<BankEntity, String> {

    @Override
    List<BankEntity> findAll();

    List<BankEntity> findAllByType(String Type);

    List<BankEntity> findAllByName(String name);
}
