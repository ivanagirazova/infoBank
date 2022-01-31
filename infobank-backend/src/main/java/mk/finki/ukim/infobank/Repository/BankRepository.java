package mk.finki.ukim.infobank.Repository;

import mk.finki.ukim.infobank.Model.BankEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankRepository extends CrudRepository<BankEntity,String> {
    @Override
    List<BankEntity> findAll();
    List<BankEntity> findAllByType(String Type);
}
