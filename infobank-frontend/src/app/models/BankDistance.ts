import {BankEntity} from "./BankEntity";

export class BankDistance {
  public bankEntity: BankEntity
  public distanceFromUser: number

  constructor(bank: BankEntity, distance: number) {
    this.bankEntity = bank;
    this.distanceFromUser = distance;
  }
}
