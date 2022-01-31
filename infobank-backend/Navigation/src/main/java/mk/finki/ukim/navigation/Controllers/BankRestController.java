package mk.finki.ukim.navigation.Controllers;

import mk.finki.ukim.navigation.DTO.BankDistanceUserDTO;
import mk.finki.ukim.navigation.Model.BankEntity;
import mk.finki.ukim.navigation.Model.BankImages;
import mk.finki.ukim.navigation.Model.LocationInfo;
import mk.finki.ukim.navigation.Repository.BankImageRepository;
import mk.finki.ukim.navigation.Service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("banks")
public class BankRestController {

    @Autowired
    private BankService bankService;

    @Autowired
    private BankImageRepository bankImageRepository;

    @PostMapping
    public List<BankDistanceUserDTO> getAll(@RequestParam(required = false) boolean includeBanks,
                                            @RequestParam(required = false) boolean includeAtms,
                                            @RequestParam(required = false) String name,
                                            @RequestBody(required = false) LocationInfo userLocation) {
        return bankService.getBankDistanceUserDTO(includeBanks, includeAtms, name, userLocation);
    }

    @GetMapping("operators1")
    public List<String> getAllBankOperators() {
        return bankService.getAllOperators();
    }

    @GetMapping("images")
    public List<BankImages> bankImages() {
        return bankImageRepository.findAll();
    }

}
