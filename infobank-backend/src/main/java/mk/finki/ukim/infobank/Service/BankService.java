package mk.finki.ukim.infobank.Service;

import mk.finki.ukim.infobank.Components.Utility.BankPipeSingleton;
import mk.finki.ukim.infobank.Components.Utility.BankUtility;
import mk.finki.ukim.infobank.Components.Utility.LocationUtility;
import mk.finki.ukim.infobank.DTO.BankDistanceUserDTO;
import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Model.LocationInfo;
import mk.finki.ukim.infobank.Model.enumerations.BankType;
import mk.finki.ukim.infobank.Repository.BankRepository;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.*;
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

    public void saveElement(Map<String, String> element) {
        bankRepository.save(new BankEntity(element));
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



    @SuppressWarnings("unchecked")
    public void updateBankData() throws IOException, ParserConfigurationException, SAXException {
        List<Map<String, String>> bankData = (List<Map<String, String>>) BankPipeSingleton.getInstance()
                .PerformOperations(BankUtility.getHttpBankData(BankType.bank));
        List<Map<String, String>> atmData = (List<Map<String, String>>) BankPipeSingleton.getInstance()
                .PerformOperations(BankUtility.getHttpBankData(BankType.atm));
        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
    }

}
