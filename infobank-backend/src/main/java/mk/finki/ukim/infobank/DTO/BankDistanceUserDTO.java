package mk.finki.ukim.infobank.DTO;

import lombok.Getter;
import lombok.Setter;
import mk.finki.ukim.infobank.Model.BankEntity;
import mk.finki.ukim.infobank.Model.BankImages;
import mk.finki.ukim.infobank.Repository.BankImageRepository;
import org.springframework.beans.factory.annotation.Autowired;

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
