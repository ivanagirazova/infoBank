import {Injectable, OnInit} from '@angular/core';
import * as L from "leaflet";
import {LocationInfo} from "../models/LocationInfo";

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

@Injectable({
  providedIn: 'root'
})
export class MapService{

  public map: any;
  cityCenter: LocationInfo = new LocationInfo(41.9936657, 21.4428736);
  constructor() { }

  public initMap(): L.Map {
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

    return this.map;
  }

  setView(location:LocationInfo) {
   this.map.setView([location.lat,location.lon], this.map.getZoom(), {animate: true})
  }
}
