import {BankEntity} from "./BankEntity";

export class BankDistance {
  public bank: BankEntity
  public distance: number

  constructor(bank: BankEntity, distance: number) {
    this.bank = bank;
    this.distance = distance;
  }
}
