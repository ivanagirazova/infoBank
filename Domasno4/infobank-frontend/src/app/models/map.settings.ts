import * as L from "leaflet";

const iconRetinaUrl = 'assets/pngfind.com-location-symbol-png-2821102.png';
const iconUrl = 'assets/pngfind.com-location-symbol-png-2821102.png';
const shadowUrl = 'assets/marker-shadow.png';

export const MapIconSettings = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [32, 51],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28]
});

export const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 3,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
