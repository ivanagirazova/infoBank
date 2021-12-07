import { Injectable } from '@angular/core';
import * as L from "leaflet";


@Injectable({
  providedIn: 'root'
})
export class GetUserLocationService {

  private map: any;
  public GetUserLocationService(map: any): any {
    this.map = map;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
      coords: { latitude, longitude },
    } = position;

    const marker = L.marker([latitude, longitude]);
    marker.addTo(this.map);
    this.map.setView([latitude,longitude],this.map.getZoom(),{animate: true})
  }
}
