package mk.finki.ukim.infobank.Components.Pipe;

import java.util.ArrayList;
import java.util.List;

public class Pipe
{
    private List<IFilter> operations;

    public Pipe() {
        operations = new ArrayList<>();
    }

    public void addFilter(IFilter operation) {
        operations.add(operation);
    }

    public Object PerformOperations(Object input) {
        for (IFilter operation : operations) {
            input = operation.Execute(input);
        }
        return input;
    }
}