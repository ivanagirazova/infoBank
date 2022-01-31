package mk.finki.ukim.datafetchosm.Repository;

import mk.finki.ukim.datafetchosm.Model.BankEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankRepository extends CrudRepository<BankEntity, String> {
}
