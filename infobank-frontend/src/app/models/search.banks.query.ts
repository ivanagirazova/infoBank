import {LocationInfo} from "./location-info";

export class SearchBanksQuery {
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
