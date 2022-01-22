package mk.finki.ukim.infobank.Controllers;

import mk.finki.ukim.infobank.DTO.BankDistanceUserDTO;
import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Model.BankImages;
import mk.finki.ukim.infobank.Model.LocationInfo;
import mk.finki.ukim.infobank.Repository.BankImageRepository;
import mk.finki.ukim.infobank.Service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("banks")
public class BankRestController {

    @Autowired
    private BankService bankService;

    @Autowired
    private BankImageRepository bankImageRepository;

    @PostMapping
    public List<BankDistanceUserDTO> getAll(
                                            @RequestParam(required = false) boolean includeBanks,
                                            @RequestParam(required = false) boolean includeAtms,
                                            @RequestParam(required = false) String name,
                                            @RequestBody(required = false) LocationInfo userLocation) {
        if (userLocation == null) {
            return bankService.getBanksAndAtms(includeBanks,includeAtms,name).stream()
                    .map(x->new BankDistanceUserDTO(x,null))
                    .collect(Collectors.toList());
        }
        return bankService.getBanksAndAtmsSortedByUserDistance(includeBanks,includeAtms, name, userLocation);
    }

    @GetMapping("operators")
    public List<String> getAllBankOperators() {
        return bankService.getAll().stream().map(BankEntity::getName).distinct().collect(Collectors.toList());
    }

    @GetMapping("image")
    public BankImages bankImages() {
        return bankImageRepository.findBankImagesByName("Стопанска Банка");
    }
}
