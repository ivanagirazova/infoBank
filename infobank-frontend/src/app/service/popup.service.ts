import { Injectable } from '@angular/core';
import {BankDistance} from "../models/BankDistance";
import {BankService} from "./bank.service";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private bankService:BankService) { }

  makeBankPopup(data: BankDistance): string {
    let bank = data.bankEntity;
    let link = this.bankService.getPicture(data.bankEntity.name, data.bankEntity.type);
    let ret =
      `<div>Bank: ${ bank.name }</div>
       <div>Type: ${ bank.type }</div>
       <div>Distance: ${ data.distanceFromUser } m</div>
        <div><img src="${ link }"  width="100px" height="100px"></div>
`;

    for (let key in bank.details) {
      ret += `<div>${key}: ${ bank.details[key] }</div>`;
    }
    return ret;
  }
}
