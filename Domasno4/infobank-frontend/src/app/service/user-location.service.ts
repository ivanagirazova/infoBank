import {Injectable} from '@angular/core';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  public getUserLocation(): Observable<any> {
    return new Observable((observer: any) => {
      window.navigator.geolocation.getCurrentPosition(position => {
          observer.next(position);
          observer.complete();
        },
        error => observer.error(error));
    });
  }
}
