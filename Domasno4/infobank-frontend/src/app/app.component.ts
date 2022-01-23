import {Component} from '@angular/core';
import {LocationInfo} from "./models/location-info";
import {SearchBanksQuery} from "./models/search.banks.query";

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
  location: LocationInfo | undefined;

  constructor() {
  }

  getSearch(search: SearchBanksQuery) {
    this.searchBank = search.banks
    this.searchAtm = search.atms
    this.nameBank = search.name
    this.location = search.location
  }
}
