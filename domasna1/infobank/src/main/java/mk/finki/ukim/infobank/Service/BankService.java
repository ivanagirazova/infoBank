package mk.finki.ukim.infobank.Service;

import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Repository.BankRepository;
import mk.finki.ukim.infobank.Components.Filters.Filters;
import mk.finki.ukim.infobank.Components.HTTP.OverpassHttpRequest;
import mk.finki.ukim.infobank.Components.Pipe.Pipe;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class BankService{
    private final BankRepository bankRepository;

    public BankService(BankRepository bankRepository) {
        this.bankRepository = bankRepository;
    }

    public void saveElement(Map<String,String> element)
    {
        bankRepository.save(new BankEntity(element));
    }

    public void updateBankData()
    {
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

        List<Map<String,String>> bankData = (List<Map<String, String>>) getDataPipe.PerformOperations(bankInputStream);
        List<Map<String,String>> atmData = (List<Map<String, String>>) getDataPipe.PerformOperations(atmInputStream);

        bankData.forEach(this::saveElement);
        atmData.forEach(this::saveElement);
    }

    public List<BankEntity> getBanksAndAtms(boolean includeBanks ,boolean includeAtms ,String name)
    {
        List<BankEntity> banksAndAtms = new ArrayList<>();
        if (includeBanks)
        {
            banksAndAtms.addAll(bankRepository.findAllByType("bank"));
        }
        if (includeAtms)
        {
            banksAndAtms.addAll(bankRepository.findAllByType("atm"));
        }
        if(name != null )banksAndAtms = banksAndAtms.stream().filter(x->x.getName().contains(name)).collect(Collectors.toList());

        return banksAndAtms;
    }

    public List<BankEntity> getAll()
    {
       return bankRepository.findAll();
    }

    public List<BankEntity> getBanks(String name)
    {
        List<BankEntity> list = new ArrayList<>();
        if(name==null)
            bankRepository.findAll().forEach(x -> {
                if(x.getType().equals("bank"))
                    list.add(x);
            });
        else
            bankRepository.findAll().forEach(x -> {
                if(x.getType().equals("bank") && x.getName().equals(name))
                    list.add(x);
            });
        return list;
    }

    public List<BankEntity> getAtms(String name)
    {
        List<BankEntity> list = new ArrayList<>();
        if(name==null)
            bankRepository.findAll().forEach(x -> {
                if(x.getType().equals("atm"))
                    list.add(x);
            });
        else
            bankRepository.findAll().forEach(x -> {
                if(x.getType().equals("atm") && x.getName().equals(name))
                    list.add(x);
            });
        return list;
    }
}
