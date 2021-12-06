import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { BankMarkerService} from "../service/bank-marker.service";
import { GetUserLocationService } from "../service/get-user-location.service";


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

export class MapComponent implements AfterViewInit  {

  private map:any;
  searchBank:boolean = true;
  searchAtm:boolean = true;
  nameBank:string = '';
  operators:Array<string> = ['','Народната Банка на Република Македонија', 'Стопанска Банка', 'Охридска Банка', 'Уни Банка', 'NLB Банка', 'Halkbank', 'Комерцијална Банка', 'Зират Банка', 'Централен Регистер на РМ', 'Шпаркасе Банка', 'Централна Кооперативна Банка', 'Прокредит Банка', 'ТТК Банка', 'Силк Роуд Банка', 'Western Union'];


  private initMap(): void {
    this.map = L.map('map', {
      center: [ 41.9936657, 21.4428736],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private bankMarkerService: BankMarkerService, private geoUserLocation: GetUserLocationService) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.change()
    //this.operators = this.bankMarkerService.getOperators();
    //console.log(this.operators)
    this.geoUserLocation.GetUserLocationService(this.map);
  }

  change()
  {
    this.bankMarkerService.showBankMarker(this.map,this.searchBank,this.searchAtm,this.nameBank);
    console.log(this.searchBank + ' ' + this.searchAtm + ' ' + this.nameBank)
  }
}

