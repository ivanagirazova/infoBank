import { Injectable } from '@angular/core';
import * as L from "leaflet";
import {Browser} from "leaflet";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GetUserLocationService {

  private map: any;
  public GetUserLocationService(map: any): any {
    this.map = map;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
      return navigator.geolocation.getCurrentPosition((pos)=> {
        //console.log(pos);
        return pos
      });
    }
    return null;
  }

  public getPosition():Observable<any>
  {
    return Observable.create((observer:any) => {
      window.navigator.geolocation.getCurrentPosition(position => {
          observer.next(position);
          observer.complete();
        },
        error => observer.error(error));
    });
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
