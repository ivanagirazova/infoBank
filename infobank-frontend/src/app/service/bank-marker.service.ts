import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {catchError, Observable, throwError} from "rxjs";
import {BankEntity} from "../models/BankEntity";
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
    // this.bankService.getBanks(showBank, showAtm, name, userLocation)
    //   .subscribe(res => {
    //     this.banks = res;
    //     console.log(this.banks);
    //     this.showMarks(map, <BankDistance[]>res);
    //   });
    this.showMarks(map, this.bankService.getHardCodedBanks().map(x=>new BankDistance(x, 0)));
  }

  showMarks(map: L.Map, banks: BankDistance[]){
    this.circles.forEach(x=>x.remove());
    for (const bankDistance of banks) {
      let bank = bankDistance.bank;

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
    //return this.http.jsonp(this.usersUrl+"/operators",'callback').pipe(catchError(this.handleError));
  }
}
