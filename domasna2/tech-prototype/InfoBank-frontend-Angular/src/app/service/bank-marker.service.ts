import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class BankMarkerService {
  banks: any;
  private usersUrl: string;
  private circles:Array<L.CircleMarker> = []

  constructor(private http: HttpClient, private popupService: PopupService) {
    this.usersUrl = "http://localhost:8080/get";
  }

  showBankMarker(map: L.Map,showBank:boolean, showAtm: boolean, name: string): void {
    this.http.get(this.usersUrl,{params: {'includeBanks': showBank,'includeAtms': showAtm,'name': name}}).subscribe(res => {
      this.banks = res

      this.circles.forEach(x=>x.remove());
      for (const c of this.banks) {
        let circleColor = 'red';
        if (c.type === 'atm') circleColor = 'blue';
        const circle = L.circleMarker([c.lat, c.lon], {
          radius: 10,
          color: circleColor
        });
        this.circles.push(circle);

        circle.bindPopup(this.popupService.makeBankPopup(c));
        circle.addTo(map);
      }
    });
    }

    getOperators() : any
    {
      let data:any = [''];
      this.http.get(this.usersUrl+"/operators").subscribe(res => {
        console.log(res);
        data = res;
      });
      return data;
    }
}
