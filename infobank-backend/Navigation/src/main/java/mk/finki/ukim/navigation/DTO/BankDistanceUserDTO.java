package mk.finki.ukim.navigation.DTO;

import lombok.Getter;
import lombok.Setter;
import mk.finki.ukim.navigation.Model.BankEntity;
import mk.finki.ukim.navigation.Model.BankImages;
import mk.finki.ukim.navigation.Model.BankEntity;

/**
 * Adapter design pattern
 */
@Getter
@Setter
public class BankDistanceUserDTO {

    private BankEntity bankInfo;
    private Double distanceFromUser;
    private BankImages bankImage;

    public BankDistanceUserDTO(BankEntity bankEntity, Double distanceFromUser, BankImages bankImage) {
        this.bankInfo = bankEntity;
        this.distanceFromUser = distanceFromUser;
        this.bankImage = bankImage;
    }

    public BankDistanceUserDTO(BankEntity bankEntity, BankImages bankImage) {
        this.bankInfo = bankEntity;
        this.distanceFromUser = null;
        this.bankImage = bankImage;
    }
}
