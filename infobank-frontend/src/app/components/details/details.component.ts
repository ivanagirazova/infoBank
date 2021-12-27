import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BankEntity} from "../../models/BankEntity";
import {BankDistance} from "../../models/BankDistance";
import {BankService} from "../../service/bank.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {

  @Input() banks: BankDistance[] = [];
  selectedBank:any;

  constructor(public bankService:BankService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  show: boolean = true;

  changeShow() : void {
    this.show = !this.show;
  }

  onClick(selectedBank: BankDistance) {
    console.log(selectedBank);
    this.selectedBank = selectedBank;
  }

  onBackClick() {
    this.selectedBank = undefined;
  }

  objectKeys(obj:BankDistance) {
    return Object.keys(obj);
  }

}
