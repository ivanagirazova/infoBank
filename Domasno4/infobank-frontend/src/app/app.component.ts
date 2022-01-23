import {Component, Input} from '@angular/core';
import {LocationInfo} from "./models/LocationInfo";
import {BankService} from "./service/bank.service";
import {BankEntity} from "./models/BankEntity";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoBank-frontend';
  searchBank:boolean = true;
  searchAtm:boolean = true;
  nameBank:string = '';
  location: LocationInfo = new LocationInfo(0,0);

  constructor(private bankSerice: BankService) {
  }

  getSearch(search: any) {
    this.searchBank = search[0];
    this.searchAtm = search[1];
    this.nameBank = search[2];
    this.location = search[3];
  }
}
