import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {BankDistance} from "../models/bank-distance";
import {BankImage} from "../models/bank-image";
import {BankType} from "../models/bank-type";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  usersUrl = "http://localhost:8080/banks";
  public banks: BankDistance[] = []
  pictures: BankImage[] = []

  constructor(private http: HttpClient) {
  }

  getBanks(showBank: boolean, showAtm: boolean, name: string, userLocation: any): Observable<any> {
    return this.http.post(
      this.usersUrl,
      JSON.stringify(userLocation),
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('includeBanks', showBank).set('includeAtms', showAtm).set('name', name)
      }
    ).pipe(catchError(this.handleError));
  }

  getOperators(): Observable<string[]> {
    return this.http.get<string []>(this.usersUrl + "/operators");
  }

  getPicture(bank: BankImage, type: string) {
    if (type == BankType.Atm) return bank.atm;
    return bank.bank;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() =>
      'Something bad happened; please try again later.');
  }
}




