package mk.finki.ukim.infobank.Controllers;

import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
public class BankRestController {

    @Autowired
    private BankService bankService;

    @GetMapping(value="/all")
    public List<BankEntity> getAll(@RequestParam(required = false) String name) {
        return bankService.getAll(name);
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
