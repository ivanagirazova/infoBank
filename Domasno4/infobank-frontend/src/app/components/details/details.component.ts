import {Component, Input} from '@angular/core';
import {BankDistance} from "../../models/bank-distance";
import {BankService} from "../../service/bank.service";
import {MapService} from "../../service/map.service";
import {LocationInfo} from "../../models/location-info";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() banks: BankDistance[] = [];
  @Input() selectedBank: BankDistance | undefined;

  constructor(public bankService:BankService, private mapService:MapService) { }

  show: boolean = true;

  changeShow() : void {
    this.show = !this.show;
  }

  onClick(selectedBank: BankDistance) {
    this.selectedBank = selectedBank;
    this.mapService.centerView(new LocationInfo(selectedBank.bankInfo.lat, selectedBank.bankInfo.lon));
  }

  onBackClick() {
    this.selectedBank = undefined;
  }

  objectKeys(obj:BankDistance) {
    return Object.keys(obj);
  }

  getDistance(bank: BankDistance): string {
    if (bank.distanceFromUser != null) {
      return this.calculateDistance(bank.distanceFromUser);
    }
    else return "";
  }

  calculateDistance(distance: number): string {
    if (distance > 1000) return (distance/1000) + " km";
    return distance + " m";
  }
}
