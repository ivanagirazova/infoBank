import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import {catchError, Observable, throwError} from "rxjs";

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

    getOperators() : Observable<any>
    {
      return this.http.get(this.usersUrl+"/operators")    ;
      //return this.http.jsonp(this.usersUrl+"/operators",'callback').pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
}
