import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {Observable} from "rxjs";
import {BankDistance} from "../models/BankDistance";
import {BankService} from "./bank.service";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";
import {LocationInfo} from "../models/LocationInfo";
import {MapComponent} from "../map/map.component";
import {DivIconOptions} from "leaflet";
import {MapService} from "./map.service";

@Injectable({
  providedIn: 'root'
})
export class BankMarkerService {
  private markers:Array<L.Marker> = [];
  private userLocationMarker: any;

  constructor(private bankService: BankService,private mapService: MapService) {}

  showBanksOnMap(banks: BankDistance[], component: MapComponent): void {
    let map = this.mapService.map;
    this.markers.forEach(x => x.remove());

    for (const bankDistance of banks) {
      let bank = bankDistance.bankEntity;

      let options:CustomDivIconOptions = {
        html: `<img src="${this.bankService.getPicture(bank.name, bank.type)}" class="bank-icons" >`,
        id : bank.id
      };

      let marker = L.marker([bank.lat, bank.lon], {icon: L.divIcon(options) }).addTo(map);
      marker.on('click', component.onClickBank.bind(component));

      this.markers.push(marker);
    }
  }

  public setUserLocationToMap(location:LocationInfo) {
    let map = this.mapService.map;
    if (this.userLocationMarker != undefined){
      this.userLocationMarker.remove();
    }
    this.userLocationMarker=  L.marker([location.lat, location.lon]).addTo(map);
    this.userLocationMarker.addTo(map);
    map.setView([location.lat,location.lon], map.getZoom(), {animate: true})
  }
}


class CustomDivIconOptions implements DivIconOptions{
  html?: string | HTMLElement | false | undefined;
  className?: string | undefined;
  id? : string | undefined
}
