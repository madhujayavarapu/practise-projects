import { PROJ_CONSTANTS } from './../../../../../../constants/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.scss']
})
export class CurrencyCalculatorComponent implements OnInit {

  from: string = "rupee";
  to: string = "dollar";
  fromVal: number = 1;
  toVal: number = 1;
  result: number;

  currencyMap = PROJ_CONSTANTS.CURRENCY_MAP;

  currencyOptions = {
    "rupee": "Indian Rupee",
    "dollar": "US - Dollar",
    "yuan": "Chinese Yuan",
    "s-rupee": "Srilankan Rupee",
    "aus-dollar": 'Australian Dollar'
  }

  constructor() { }

  ngOnInit() {
  }

  calc(src: string) {
    if(this.from == this.to) {
      this.toVal = this.fromVal;
    }else{
      switch(src) {
        case 'from':
          this.toVal = this.fromVal * this.getCurrencyRatio(this.from, this.to);
          break;
        case 'to':
          this.fromVal = this.toVal * this.getCurrencyRatio(this.to, this.from);
          break;
        default:
          console.error("Src was wrong");
          break;
      }
    }
  }

  getCurrencyRatio(from: string, to: string) {
    if(from == 'rupee' || to == 'rupee') {
      return from == 'rupee' ? this.currencyMap.rupee[to] : (1/this.currencyMap.rupee[from]); 
    }else {
      let rupeeVal = this.currencyMap.rupee[from]; // 74
      let rupeeToVal = this.currencyMap.rupee[to]; // 10
      return rupeeToVal/rupeeVal;
    }
  }
}
