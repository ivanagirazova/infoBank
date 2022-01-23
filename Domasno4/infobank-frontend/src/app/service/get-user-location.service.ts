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
}
