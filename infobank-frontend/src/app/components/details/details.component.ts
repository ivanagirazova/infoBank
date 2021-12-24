import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BankEntity} from "../../models/BankEntity";
import {BankDistance} from "../../models/BankDistance";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,OnChanges {

  @Input() banks: BankDistance[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.banks);
  }

}
