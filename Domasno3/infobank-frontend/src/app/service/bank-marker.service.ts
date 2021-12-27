import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {Observable} from "rxjs";
import {BankDistance} from "../models/BankDistance";
import {BankService} from "./bank.service";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {LocationInfo} from "../models/LocationInfo";

@Injectable({
  providedIn: 'root'
})
export class BankMarkerService {
  private banks: BankDistance[] = [];
  private circles:Array<L.Marker> = [];
  cityCenter: LocationInfo = new LocationInfo(41.9936657, 21.4428736);

  constructor(private popupService: PopupService, private bankService: BankService) {}

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
      // const circle = L.circleMarker([bank.lat, bank.lon], {
      //   radius: 10,
      //   color: circleColor
      // });
      // this.circles.push(circle);
      //
      // circle.bindPopup(this.popupService.makeBankPopup(bankDistance));
      // circle.addTo(map);

      //const marker = L.marker([bank.lat, bank.lon], {icon: IconProperty}).addTo(map);
      //L.marker([bank.lat,bank.lon]).bindPopup(`<img src="${this.bankService.getPicture(bank.name,bank.type == "atm")}">`).addTo(map);
      //this.circles.push(marker);

      var myIcon = L.divIcon({html: `<img src="${this.bankService.getPicture(bank.name,bank.type == "atm")}" class="bank-icons" >`});
      const marker = L.marker([bank.lat,bank.lon], {icon: myIcon}).addTo(map);
      this.circles.push(marker);

      marker.on('click', this.onClick)
    }
  }

  onClick(e:any) {
    console.log(e);
  }
}
