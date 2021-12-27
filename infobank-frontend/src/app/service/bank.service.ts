import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BankService {

  usersUrl = "https://infobank-spring.herokuapp.com/banks";//"http://localhost:8080/banks";
  pictures = [
    {name:'Централен Регистер на РМ', bank:'https://i.imgur.com/7FxzUdU.jpeg', atm:'https://i.imgur.com/7FxzUdU.jpeg'},
    {name:'Народната Банка на Република Македонија', bank:'https://i.imgur.com/o8aypnQ.jpeg', atm:'https://i.imgur.com/o8aypnQ.jpeg'},
    {name:'Стопанска Банка', bank:'https://i.imgur.com/xLw53KE.jpg', atm:'https://i.imgur.com/iyorn8E.png'},
    {name:'Охридска Банка', bank:'https://i.imgur.com/KdjVKRY.jpeg', atm:'https://i.imgur.com/XqrGA5k.jpeg'},
    {name:'Уни Банка', bank:'https://i.imgur.com/wumYBai.jpg', atm:'https://i.imgur.com/10y6DLi.jpg'},
    {name:'NLB Банка', bank:'https://i.imgur.com/5Py7aEF.png', atm:'https://i.imgur.com/eAplp6O.jpeg'},
    {name:'Halkbank', bank:'https://i.imgur.com/laMMGDz.jpg', atm:'https://i.imgur.com/qu85ztS.jpeg'},
    {name:'Комерцијална Банка', bank:'https://i.imgur.com/1kpGoCn.jpg', atm:'https://i.imgur.com/3c0TN2Q.jpg'},
    {name:'Шпаркасе Банка', bank:'https://i.imgur.com/K7VQLyy.png', atm:'https://i.imgur.com/5EEJNCS.jpg'},
    {name:'Централна Кооперативна Банка', bank:'https://i.imgur.com/H4AqOLa.jpeg', atm:'https://i.imgur.com/GKOp91o.jpeg'},
    {name:'Прокредит Банка', bank:'https://i.imgur.com/fpgqBUe.jpg', atm:'https://i.imgur.com/gPmZz36.jpg'},
    {name:'ТТК Банка', bank:'https://i.imgur.com/fuH2Yy3.jpg', atm:'https://i.imgur.com/j8eEI5E.jpg'},
    {name:'Силк Роуд Банка', bank:'https://i.imgur.com/WHu6qnx.jpg', atm:'https://i.imgur.com/tgmGLxP.jpg'},
    {name:'Western Union', bank:'https://i.imgur.com/TdPPdNc.jpg', atm:'https://i.imgur.com/TdPPdNc.jpg'},
    {name:'Зират Банка', bank:'https://i.imgur.com/b3km4qK.jpg', atm:'https://i.imgur.com/b3km4qK.jpg'}]

  constructor(private http:HttpClient) {
  }

  getBanks(showBank:boolean, showAtm: boolean, name: string, userLocation:any): Observable<any> {
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

  getPicture(name:string,atm: boolean): any {
    let bankImage = this.pictures.find(x=>x.name===name);
    if (bankImage == undefined) return null;

    if (atm) return bankImage.atm;
    return bankImage.bank;
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
