package mk.finki.ukim.navigation.Service;

import mk.finki.ukim.navigation.DTO.BankDistanceUserDTO;
import mk.finki.ukim.navigation.Model.BankEntity;
import mk.finki.ukim.navigation.Model.LocationInfo;
import mk.finki.ukim.navigation.Repository.BankRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class BankService {
    private final BankRepository bankRepository;

    public BankService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    public List<BankEntity> getBanksAndAtms(boolean includeBanks, boolean includeAtms, String name) {
        List<BankEntity> banksAndAtms = new ArrayList<>();
        if (includeBanks) {
            banksAndAtms.addAll(bankRepository.findAllByType("bank"));
        }
        if (includeAtms) {
            banksAndAtms.addAll(bankRepository.findAllByType("atm"));
        }
        if (name != null)
            banksAndAtms = banksAndAtms.stream().filter(x -> x.getName().contains(name)).collect(Collectors.toList());

        return banksAndAtms;
    }

    public List<BankDistanceUserDTO> getBanksAndAtmsSortedByUserDistance(boolean includeBanks, boolean includeAtms, String name, LocationInfo UserLocation) {
        return getBanksAndAtms(includeBanks, includeAtms, name)
                .stream().map(x -> new BankDistanceUserDTO(x, distance(UserLocation, x)))
                .sorted(Comparator.comparing(BankDistanceUserDTO::getDistanceFromUser))
                .collect(Collectors.toList());
    }

    public List<BankEntity> getAll() {
        return bankRepository.findAll();
    }

    /**
     * Calculate distance between two points in latitude and longitude taking
     * into account height difference. If you are not interested in height
     * difference pass 0.0. Uses Haversine method as its base.
     * <p>
     * lat1, lon1 Start point lat2, lon2 End point el1 Start altitude in meters
     * el2 End altitude in meters
     *
     * @returns Distance in Meters
     */
    public static double distance(LocationInfo first, LocationInfo second) {

        double lat1 = first.getLat();
        double lat2 = second.getLat();
        double lon1 = first.getLon();
        double lon2 = second.getLon();
        double el1 = 0.0;
        double el2 = 0.0;
        final int R = 6371; // Radius of the earth

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c * 1000; // convert to meters

        double height = el1 - el2;

        distance = Math.pow(distance, 2) + Math.pow(height, 2);

        return Math.round(Math.sqrt(distance));
    }

}
