package mk.finki.ukim.infobank.Controller;

import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("get")
public class BankRestController {

    @Autowired
    private BankService bankService;

    @GetMapping(value="")
    public List<BankEntity> getAll(@RequestParam(required = false) boolean includeBanks,@RequestParam(required = false) boolean includeAtms, @RequestParam(required = false) String name) {
        return bankService.getBanksAndAtms(includeBanks,includeAtms,name);
    }

    @GetMapping(value="operators")
    public List<String> getAllBankOperators() {
        return bankService.getAll().stream().map(BankEntity::getName).distinct().collect(Collectors.toList());
    }

    @GetMapping(value="/bank")
    public List<BankEntity> getBanks(@RequestParam(required = false) String name) {
        return bankService.getBanks(name);
    }

    @GetMapping(value="/atm")
    public List<BankEntity> getAtms(@RequestParam(required = false) String name) {
        return bankService.getAtms(name);
    }
}
