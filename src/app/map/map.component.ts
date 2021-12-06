import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { BankMarkerService} from "../service/bank-marker.service";
import { GetUserLocationService } from "../service/get-user-location.service";
import {core} from "@angular/compiler";


const iconRetinaUrl = 'assets/pngfind.com-location-symbol-png-2821102.png';
const iconUrl = 'assets/marker-icon.png';
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
  searchBank:Boolean = true;
  searchAtm:Boolean = true;
  nameBank:string = 'all';

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
    this.bankMarkerService.showBankMarker(this.map);
    this.geoUserLocation.GetUserLocationService(this.map);
  }
}

