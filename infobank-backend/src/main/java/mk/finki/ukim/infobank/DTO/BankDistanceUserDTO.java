package mk.finki.ukim.infobank.DTO;

import lombok.Getter;
import lombok.Setter;
import mk.finki.ukim.infobank.Model.BankEntity;

@Getter
@Setter
public class BankDistanceUserDTO {
    private BankEntity bankEntity;
    private Double distanceFromUser;

    public BankDistanceUserDTO(BankEntity bankEntity, Double distanceFromUser) {
        this.bankEntity = bankEntity;
        this.distanceFromUser = distanceFromUser;
    }
}
