package mk.finki.ukim.navigation.DTO;

import lombok.Getter;
import lombok.Setter;
import mk.finki.ukim.navigation.Model.BankEntity;

@Getter
@Setter
public class BankDistanceUserDTO {
    private BankEntity bankInfo;
    private Double distanceFromUser;

    public BankDistanceUserDTO(BankEntity bankEntity, Double distanceFromUser) {
        this.bankInfo = bankEntity;
        this.distanceFromUser = distanceFromUser;
    }
}
