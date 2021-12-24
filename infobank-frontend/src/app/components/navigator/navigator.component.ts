import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationInfo} from "../../models/LocationInfo";
import {GetUserLocationService} from "../../service/get-user-location.service";
import {BankMarkerService} from "../../service/bank-marker.service";
import {BankService} from "../../service/bank.service";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  searchBank:boolean = true;
  searchAtm:boolean = true;
  nameBank:string = '';

  @Output() searchChangedEvent = new EventEmitter<any>();

  operators:Array<string> = [''];
  userLocation:any;

  constructor(private bankService:BankService) { }

  ngOnInit(): void {
    this.bankService.getOperators().subscribe(operators =>
      this.operators = ['',...operators]
    );
  }

  change() {
    this.searchChangedEvent.emit([this.searchBank, this.searchAtm, this.nameBank, this.userLocation])
  }

}

export class searchQuery {
  banks: boolean;
  atms: boolean;
  name: string;
  location: LocationInfo;

  constructor(banks: boolean, atms: boolean, name: string, location: LocationInfo) {
    this.banks = banks;
    this.atms = atms;
    this.name = name;
    this.location = location;
  }
}
