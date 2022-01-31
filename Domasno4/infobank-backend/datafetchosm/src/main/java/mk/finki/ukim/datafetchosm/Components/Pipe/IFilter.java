package mk.finki.ukim.datafetchosm.Components.Pipe;

public interface IFilter<T, M> {
    M Execute(T input);
}
