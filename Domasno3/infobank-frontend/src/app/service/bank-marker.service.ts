import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {Observable} from "rxjs";
import {BankDistance} from "../models/BankDistance";
import {BankService} from "./bank.service";

@Injectable({
  providedIn: 'root'
})
export class BankMarkerService {
  private banks: BankDistance[] = [];
  private circles:Array<L.CircleMarker> = []

  constructor(private http: HttpClient, private popupService: PopupService, private bankService: BankService) {}

  getBanks(map: L.Map, showBank:boolean, showAtm: boolean, name: string, userLocation:any): void {
    this.bankService.getBanks(showBank, showAtm, name, userLocation)
      .subscribe(res => {
        this.banks = res;
        this.showMarks(map, <BankDistance[]>res);
      });
  }

  showMarks(map: L.Map, banks: BankDistance[]){
    this.circles.forEach(x=>x.remove());

    for (const bankDistance of banks) {
      let bank = bankDistance.bankEntity;

      let circleColor = 'red';
      if (bank.type === 'atm') circleColor = 'blue';
      const circle = L.circleMarker([bank.lat, bank.lon], {
        radius: 10,
        color: circleColor
      });
      this.circles.push(circle);

      circle.bindPopup(this.popupService.makeBankPopup(bankDistance));
      circle.addTo(map);
    }
  }

  getOperators() : Observable<any> {
    return this.bankService.getOperators();
  }
}
