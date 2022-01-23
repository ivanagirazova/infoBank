import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LeafletEvent} from "leaflet";
import {LocationInfo} from "../../models/location-info";
import {BankDistance} from "../../models/bank-distance";
import {MapService} from "../../service/map.service";
import {MapMarkerService} from "../../service/map-marker.service";
import {BankService} from "../../service/bank.service";
import {UserLocationService} from "../../service/user-location.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit, OnInit, OnChanges  {

  @Input() searchBank:boolean = true;
  @Input() searchAtm:boolean = true;
  @Input() nameBank:string = '';
  userLocation: LocationInfo | undefined;
  selectedBank: BankDistance | undefined;
  map: any;

  constructor(private mapService: MapService, private bankMarkerService: MapMarkerService, private bankService: BankService, private userLocationService: UserLocationService) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchBanks();
  }

  ngAfterViewInit(): void {
    this.map = this.mapService.initMap();
    this.getUserLocationOnMap();
    this.searchBanks()
  }

  searchBanks() {
    this.bankService.getBanks(this.searchBank, this.searchAtm, this.nameBank, this.userLocation).subscribe(
      banks => {
        this.bankService.banks = banks;
        console.log(this.bankService.banks);
        this.bankMarkerService.setBanksOnMap(banks, this);
      }
    );
  }

  getCurrentBanks() {
    return this.bankService.banks;
  }

  onClickBank(e:LeafletEvent) {
    let bankId = e.sourceTarget.options.icon.options.bankId;
    this.selectedBank = this.bankService.banks.find(x=>x.bankInfo.id == bankId);

    if (this.selectedBank != undefined) {
      this.mapService.centerView(new LocationInfo(this.selectedBank.bankInfo.lat, this.selectedBank.bankInfo.lon));
    }
  }

  getUserLocationOnMap() {
    this.userLocationService.getUserLocation().subscribe({
      next:(pos)=> {
        this.userLocation = new LocationInfo(pos.coords.latitude, pos.coords.longitude);
        this.bankMarkerService.setUserLocationOnMap(this.userLocation);

        this.searchBanks();
      },
      error: ()=> {
        // permission denied
      }
    });
  }
}
