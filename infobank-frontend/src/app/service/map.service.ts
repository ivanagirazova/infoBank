import {Injectable} from '@angular/core';
import * as L from "leaflet";
import {LocationInfo} from "../models/location-info";
import {MapIconSettings, tiles} from "../models/map.settings";

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
    tiles.addTo(this.map);
    L.Marker.prototype.options.icon = MapIconSettings;
    return this.map;
  }

  centerView(location: LocationInfo) {
   this.map.setView([location.lat,location.lon], this.map.getZoom(), {animate: true})
  }
}
