import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import { BankMarkerService} from "../service/bank-marker.service";
import { GetUserLocationService } from "../service/get-user-location.service";
import {LocationInfo} from "../models/LocationInfo";
import {BankEntity} from "../models/BankEntity";
import {BankService} from "../service/bank.service";
import {BankDistance} from "../models/BankDistance";


const iconRetinaUrl = 'assets/pngfind.com-location-symbol-png-2821102.png';
const iconUrl = 'assets/pngfind.com-location-symbol-png-2821102.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [32, 51],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit,OnInit , OnChanges  {

  private map:any;

  @Input() searchBank:boolean = true;
  @Input() searchAtm:boolean = true;
  @Input() nameBank:string = '';
  userLocation:any;
  banks: BankDistance[] = [];

  cityCenter: LocationInfo = new LocationInfo(41.9936657, 21.4428736);

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.cityCenter.lat, this.cityCenter.lon],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private bankMarkerService: BankMarkerService,private bankService: BankService, private geoUserLocation: GetUserLocationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.change()
  }


  change() {
    this.geoUserLocation.getUserLocation().subscribe({
      next:(pos)=> {
        this.geoUserLocation.setUserLocationToMap(this.map, pos);

        this.userLocation = new LocationInfo(pos.coords.latitude, pos.coords.longitude);
        console.log(this.userLocation);
        this.bankMarkerService.getBanks(this.map,this.searchBank,this.searchAtm,this.nameBank, this.userLocation);
      },
      error: ()=> {
        this.bankMarkerService.getBanks(this.map,this.searchBank,this.searchAtm,this.nameBank, new LocationInfo(this.cityCenter.lat, this.cityCenter.lon));
      }
    });

    this.bankService.getBanks(this.searchBank,this.searchAtm,this.nameBank, this.userLocation).subscribe(
      x=> this.banks = x
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.change();
  }


}

