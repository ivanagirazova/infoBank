import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BankMarkerService} from "../service/bank-marker.service";
import { GetUserLocationService } from "../service/get-user-location.service";
import {LocationInfo} from "../models/LocationInfo";
import {BankService} from "../service/bank.service";
import {BankDistance} from "../models/BankDistance";
import {MapService} from "../service/map.service";
import * as L from "leaflet";
import {DivIconOptions, LeafletEvent} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit,OnInit , OnChanges  {

  @Input() searchBank:boolean = true;
  @Input() searchAtm:boolean = true;
  @Input() nameBank:string = '';
  userLocation:any;
  banks: BankDistance[] = [];
  selectedBank: any;
  map: any;


  constructor(private mapService: MapService,private bankMarkerService: BankMarkerService,private bankService: BankService, private geoUserLocation: GetUserLocationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = this.mapService.initMap();
    this.change()
  }

  async change() {
    this.geoUserLocation.getUserLocation().subscribe({
      next:(pos)=> {
        this.userLocation = new LocationInfo(pos.coords.latitude, pos.coords.longitude);

        this.bankMarkerService.setUserLocationToMap(this.userLocation);

        if (this.banks.length == 0)
          this.bankService.getBanks(this.searchBank,this.searchAtm,this.nameBank, this.userLocation).subscribe(
            x=> {
              this.banks = x;
              this.bankService.banks = x;
              this.bankMarkerService.showBanksOnMap(this.banks, this);
            }
          );
        },
      error: ()=> {
        if (this.banks.length == 0)
          this.bankService.getBanks(this.searchBank,this.searchAtm,this.nameBank, this.userLocation).subscribe(
            x=> {
              this.banks = x;
              this.bankMarkerService.showBanksOnMap(this.banks, this);
            });}
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.change();
  }

  onClickBank(e:LeafletEvent) {
    let idBank = e.sourceTarget.options.icon.options.id;
    this.selectedBank = this.banks.find(x=>x.bankEntity.id == idBank);
    this.map.setView([this.selectedBank.bankEntity.lat,this.selectedBank.bankEntity.lon], this.map.getZoom(), {animate: true})
  }
}
