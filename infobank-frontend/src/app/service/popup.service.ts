import { Injectable } from '@angular/core';
import {BankDistance} from "../models/BankDistance";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeBankPopup(data: BankDistance): string {
    let bank = data.bank;
    let ret =
      `<div>Bank: ${ bank.name }</div>
       <div>Type: ${ bank.type }</div>
       <div>Distance: ${ data.distance } m</div>`;

    for (let key in bank.details) {
      ret += `<div>${key}: ${ bank.details[key] }</div>`;
    }
    return ret;
  }
}
