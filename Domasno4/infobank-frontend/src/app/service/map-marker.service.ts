import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {BankDistance} from "../models/bank-distance";
import {BankService} from "./bank.service";
import {LocationInfo} from "../models/location-info";
import {MapService} from "./map.service";
import {MapComponent} from "../components/map/map.component";
import {BankMarkerDiv} from "../models/bank-marker-div";

@Injectable({
  providedIn: 'root'
})
export class MapMarkerService {
  private markers: Array<L.Marker> = [];
  private userLocationMarker: any;

  constructor(private bankService: BankService, private mapService: MapService) {
    
  }

  setBanksOnMap(banks: BankDistance[], component: MapComponent): void {
    let map = this.mapService.map;
    this.markers.forEach(x => x.remove());

    for (const bank of banks.map(x => x.bankInfo)) {
      let bankMarkerDiv: BankMarkerDiv = {
        html: `<img src="${this.bankService.getPicture(bank.name, bank.type)}" class="bank-icons">`,
        bankId: bank.id
      };

      let marker = L.marker([bank.lat, bank.lon], {icon: L.divIcon(bankMarkerDiv)}).addTo(map);
      marker.on('click', component.onClickBank.bind(component));

      this.markers.push(marker);
    }
  }

  public setUserLocationOnMap(location: LocationInfo) {
    let map = this.mapService.map;
    if (this.userLocationMarker != undefined) {
      this.userLocationMarker.remove();
    }
    this.userLocationMarker = L.marker([location.lat, location.lon]).addTo(map);
    this.userLocationMarker.addTo(map);
    this.mapService.centerView(location);
  }
}
