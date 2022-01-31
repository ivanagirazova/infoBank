package mk.finki.ukim.navigation.Service;


import mk.finki.ukim.navigation.Components.Utility.LocationUtility;
import mk.finki.ukim.navigation.DTO.BankDistanceUserDTO;
import mk.finki.ukim.navigation.Model.BankEntity;
import mk.finki.ukim.navigation.Model.LocationInfo;
import mk.finki.ukim.navigation.Repository.BankRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankService {

    private final BankRepository bankRepository;
    private final BankImagesService bankImagesService;

    public BankService(BankRepository bankRepository, BankImagesService bankImagesService) {
        this.bankRepository = bankRepository;
        this.bankImagesService = bankImagesService;
    }

    public List<String> getAllOperators() {
        return bankRepository.findAll().stream().map(BankEntity::getName).distinct().collect(Collectors.toList());
    }

    public List<BankEntity> getBanksAndAtms(boolean includeBanks, boolean includeAtms, String name) {
        List<BankEntity> banksAndAtms = new ArrayList<>();
        if (includeBanks) {
            banksAndAtms.addAll(bankRepository.findAllByType("bank"));
        }
        if (includeAtms) {
            banksAndAtms.addAll(bankRepository.findAllByType("atm"));
        }
        if (name != null) {
            banksAndAtms = banksAndAtms.stream().filter(bank -> bank.getName().contains(name)).collect(Collectors.toList());
        }
        return banksAndAtms;
    }

    public List<BankDistanceUserDTO> getBankDistanceUserDTO(boolean includeBanks, boolean includeAtms, String name, LocationInfo UserLocation) {
        if (UserLocation == null)
            return getBanksAndAtmsWithoutUserDistance(includeBanks, includeAtms, name);
        else
            return getBanksAndAtmsSortedByUserDistance(includeBanks, includeAtms, name, UserLocation);
    }

    public List<BankDistanceUserDTO> getBanksAndAtmsSortedByUserDistance(boolean includeBanks, boolean includeAtms, String name, LocationInfo UserLocation) {
        return getBanksAndAtms(includeBanks, includeAtms, name)
                .stream().map(bank -> new BankDistanceUserDTO(bank, LocationUtility.distance(UserLocation, bank), bankImagesService.findByName(bank.getName())))
                .sorted(Comparator.comparing(BankDistanceUserDTO::getDistanceFromUser))
                .collect(Collectors.toList());
    }

    public List<BankDistanceUserDTO> getBanksAndAtmsWithoutUserDistance(boolean includeBanks, boolean includeAtms, String name) {
        return getBanksAndAtms(includeBanks, includeAtms, name).stream()
                .map(bank -> new BankDistanceUserDTO(bank, bankImagesService.findByName(bank.getName())))
                .collect(Collectors.toList());
    }

}
