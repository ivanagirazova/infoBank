import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BankDistance} from "../../models/BankDistance";
import {BankService} from "../../service/bank.service";
import {MapService} from "../../service/map.service";
import {LocationInfo} from "../../models/LocationInfo";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() banks: BankDistance[] = [];
  @Input() selectedBank:any;

  constructor(public bankService:BankService, private mapService:MapService) { }

  show: boolean = true;

  changeShow() : void {
    this.show = !this.show;
  }

  onClick(selectedBank: BankDistance) {
    this.selectedBank = selectedBank;
    this.mapService.setView(new LocationInfo(selectedBank.bankEntity.lat, selectedBank.bankEntity.lon));
  }

  onBackClick() {
    this.selectedBank = undefined;
  }

  objectKeys(obj:BankDistance) {
    return Object.keys(obj);
  }
}
