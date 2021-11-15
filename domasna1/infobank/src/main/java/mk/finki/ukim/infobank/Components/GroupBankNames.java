package mk.finki.ukim.infobank.Components;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class GroupBankNames {

    public static HashMap<List<String>,String> queries;
    public static List<String> noBanks = Arrays.asList("Iute credit","Raiffeisen Bank","ijj","ATM");
    static{
        var halk = Arrays.asList("Halbank","Halkbank", "Халкбанк", "Hallbank","Halk","Халк");
        var tutunska = Arrays.asList("Тутунска","NLB","НЛБ");
        var sparkase = Arrays.asList("Sparkasse","Шпаркасе");
        var ttk = Arrays.asList("TTK","ТТК");
        var stopanska = Arrays.asList("Stopanska","Стопанска","Sto");
        var silkroad = Arrays.asList("Silk road","Silkroad ", "Силк Роуд", "Silk Road" );
        var komercijalna = Arrays.asList("Komercijalna Banka","Комерцијална", "Komercijalna","Komerz","Komercbank");
        var prokredit = Arrays.asList("Прокреди", "ПроКредит","ProCredit");
        var unibank = Arrays.asList("Unibank","Уни Банка","УНИБанка","Уни Банка","Уни");
        var narodna = Arrays.asList("НБРМ");
        var ohridska = Arrays.asList("Охридска","Охридкса");

        queries = new HashMap<>();
        queries.put(halk,"Halkbank");
        queries.put(tutunska,"NLB Банка");
        queries.put(sparkase,"Шпаркасе Банка");
        queries.put(ttk,"ТТК Банка");
        queries.put(stopanska,"Стопанска Банка");
        queries.put(silkroad,"Силк Роуд Банка");
        queries.put(komercijalna,"Комерцијална Банка");
        queries.put(prokredit,"Прокредит Банка");
        queries.put(unibank,"Уни Банка");
        queries.put(ohridska,"Охридска Банка");
        queries.put(narodna,"Народната Банка на Република Македонија");
    }
}
