import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BankService} from "../../service/bank.service";
import {SearchBanksQuery} from "../../models/search.banks.query";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  searchBank: boolean = true;
  searchAtm: boolean = true;
  nameBank: string = '';

  @Output() searchChangedEvent = new EventEmitter<any>();

  operators:Array<string> = [''];
  userLocation:any;

  constructor(private bankService:BankService) { }

  ngOnInit(): void {
    this.bankService.getOperators().subscribe(operators =>
      this.operators = ['',...operators]
    );
  }

  searchBanks() {
    this.searchChangedEvent.emit(new SearchBanksQuery(this.searchBank, this.searchAtm, this.nameBank, this.userLocation))
  }

}
