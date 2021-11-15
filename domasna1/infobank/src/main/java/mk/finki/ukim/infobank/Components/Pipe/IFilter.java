package mk.finki.ukim.infobank.Components.Pipe;

public interface IFilter<T,M>
{
    M Execute(T input);
}
