package mk.finki.ukim.infobank.UpdateDB.Pipe;

public interface IFilter<T,M>
{
    M Execute(T input);
}
