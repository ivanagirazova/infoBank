package mk.finki.ukim.infobank.Components.Utility;

import mk.finki.ukim.infobank.Components.Filters.Filters;
import mk.finki.ukim.infobank.Components.Pipe.Pipe;

/**
 * Singleton design pattern
 */
public class BankPipeSingleton {

    private static Pipe pipeInstance = null;

    private BankPipeSingleton()
    {
        pipeInstance = new Pipe();
        pipeInstance.addFilter(Filters.CreateDocument);
        pipeInstance.addFilter(Filters.CreateElement);
        pipeInstance.addFilter(Filters.SkipFirstElement);
        pipeInstance.addFilter(Filters.flatFilter);
        pipeInstance.addFilter(Filters.ElementToMap);
        pipeInstance.addFilter(Filters.renameNameAnomalyProperties);
        pipeInstance.addFilter(Filters.removeNullAndDistinct);
        pipeInstance.addFilter(Filters.filterBanks);
    }

    public static Pipe getInstance()
    {
        if (pipeInstance == null)
            new BankPipeSingleton();
        return pipeInstance;
    }
}
