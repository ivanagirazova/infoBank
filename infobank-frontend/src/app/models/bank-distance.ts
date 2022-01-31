import {Bank} from "./bank";
import {BankImage} from "./bank-image";

export class BankDistance {
  public bankInfo: Bank
  public distanceFromUser: number
  public bankImage: BankImage

  constructor(bank: Bank, distance: number, images: BankImage) {
    this.bankInfo = bank;
    this.distanceFromUser = distance;
    this.bankImage = images;
  }
}
