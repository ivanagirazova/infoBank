package mk.finki.ukim.infobank.Service;

import com.mongodb.BasicDBObject;
import mk.finki.ukim.infobank.DTO.BankDistanceUserDTO;
import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Model.BankImgResult;
import mk.finki.ukim.infobank.Model.LocationInfo;
import mk.finki.ukim.infobank.Repository.BankImageRepository;
import mk.finki.ukim.infobank.Repository.BankRepository;
import mk.finki.ukim.infobank.Components.Filters.Filters;
import mk.finki.ukim.infobank.Components.HTTP.OverpassHttpRequest;
import mk.finki.ukim.infobank.Components.Pipe.Pipe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class BankService {
    private final BankRepository bankRepository;
    private final BankImageRepository bankImageRepository;

    public BankService(BankRepository bankRepository, BankImageRepository bankImageRepository) {
        this.bankRepository = bankRepository;
        this.bankImageRepository = bankImageRepository;
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
        if (name != null)
            banksAndAtms = banksAndAtms.stream().filter(x -> x.getName().contains(name)).collect(Collectors.toList());

        return banksAndAtms;
    }

    public List<BankDistanceUserDTO> getBanksAndAtmsSortedByUserDistance(boolean includeBanks, boolean includeAtms, String name, LocationInfo UserLocation) {
        return getBanksAndAtms(includeBanks, includeAtms, name)
                .stream().map(x -> new BankDistanceUserDTO(x, distance(UserLocation, x), bankImageRepository.findBankImagesByName(x.getName())))
                .sorted(Comparator.comparing(BankDistanceUserDTO::getDistanceFromUser))
                .collect(Collectors.toList());
    }

    public List<BankEntity> getAll() {
        return bankRepository.findAll();
    }

    public void updateBankData() {
        InputStream bankInputStream = null;
        InputStream atmInputStream = null;
        try {
            bankInputStream = OverpassHttpRequest.httpRequest(OverpassHttpRequest.bankQuery);
            atmInputStream = OverpassHttpRequest.httpRequest(OverpassHttpRequest.atmQuery);
        } catch (IOException | ParserConfigurationException | SAXException e) {
            e.printStackTrace();
        }

        Pipe getDataPipe = new Pipe();
        getDataPipe.addFilter(Filters.CreateDocument);
        getDataPipe.addFilter(Filters.CreateElement);
        getDataPipe.addFilter(Filters.SkipFirstElement);
        getDataPipe.addFilter(Filters.flatFilter);
        getDataPipe.addFilter(Filters.ElementToMap);
        getDataPipe.addFilter(Filters.changeFieldsToName);
        getDataPipe.addFilter(Filters.removeNullAndDistinct);
        getDataPipe.addFilter(Filters.filterBanks);

        List<Map<String, String>> bankData = (List<Map<String, String>>) getDataPipe.PerformOperations(bankInputStream);
        List<Map<String, String>> atmData = (List<Map<String, String>>) getDataPipe.PerformOperations(atmInputStream);

        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
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
