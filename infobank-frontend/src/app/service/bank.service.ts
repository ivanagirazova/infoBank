import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  usersUrl = "http://localhost:8080/banks";

  constructor(private http:HttpClient) {
  }

  getBanks(showBank:boolean, showAtm: boolean, name: string, userLocation:[]): Observable<any> {
    return this.http.post(
      this.usersUrl,
      JSON.stringify(userLocation),
      {
        headers : new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams().set('includeBanks', showBank).set('includeAtms', showAtm).set('name', name)
      }
    ).pipe(catchError(this.handleError));
  }

  getOperators(): Observable<any> {
    return this.http.get(this.usersUrl+"/operators");
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
    return throwError(()=>
      'Something bad happened; please try again later.');
  }
}
