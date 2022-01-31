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

  usersUrl = "http://localhost:8080/banks" // "https://infobank-spring.herokuapp.com/banks";
  public banks: BankDistance[] = []
  pictures: BankImage[] = []

  constructor(private http: HttpClient) {
    this.getImages();
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

  getImages() {
    this.http.get<BankImage[]>(this.usersUrl + '/images', {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    }).subscribe(x => this.pictures = x);
  }

  getOperators(): Observable<string[]> {
    return this.http.get<string []>(this.usersUrl + "/operators");
  }

  getPicture(name: string, type: string) {
    let bankImage = this.pictures.find(x => x.name === name);
    if (bankImage == undefined) return null;

    if (type == BankType.Atm) return bankImage.atm;
    return bankImage.bank;
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




