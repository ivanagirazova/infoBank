import { Injectable } from '@angular/core';
import * as L from "leaflet";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GetUserLocationService {

  public getUserLocation():Observable<any> {
    return new Observable((observer:any) => {
      window.navigator.geolocation.getCurrentPosition(position => {
          observer.next(position);
          observer.complete();
        },
        error => observer.error(error));
    });
  }

  public setUserLocationToMap(map: any, position: { coords: { latitude: any; longitude: any } }) {
    const {
      coords: { latitude, longitude },
    } = position;

    const marker = L.marker([latitude, longitude]);
    marker.addTo(map);
    map.setView([latitude,longitude], map.getZoom(), {animate: true})
  }
}
