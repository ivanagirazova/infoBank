package mk.finki.ukim.infobank.Repository;

import mk.finki.ukim.infobank.Model.BankEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankRepository extends CrudRepository<BankEntity,String> {
}
