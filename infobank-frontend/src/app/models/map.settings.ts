import * as L from "leaflet";

const iconRetinaUrl = 'assets/location-icon.png';
const iconUrl = 'assets/location-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

export const MapIconSettings = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [40, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28]
});

export const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 3,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
