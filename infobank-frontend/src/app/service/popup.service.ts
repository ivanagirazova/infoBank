import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeBankPopup(data: any): string {
    let ret = `` +
      `<div>Bank: ${ data.name }</div>` +
      `<div>Type: ${ data.type }</div>`;

    for (let key in data.details) {
      let value = data.details[key];
      ret += `<div>${key}: ${ value }</div>`;
    }
    return ret;
  }
}
