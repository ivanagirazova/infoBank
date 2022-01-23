import {Bank} from "./bank";

export class BankDistance {
  public bankInfo: Bank
  public distanceFromUser: number

  constructor(bank: Bank, distance: number) {
    this.bankInfo = bank;
    this.distanceFromUser = distance;
  }
}
