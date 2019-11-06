import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ng-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.scss']
})
export class TimeCalculatorComponent implements OnInit {

  from: string = "w";
  to: string = "m";
  fromVal: number = 1;
  toVal: number = 1;
  result: number;

  map = {
    'y': {
      'level': 1,
      'prev': 12,
    },
    'mo': {
      'level': 2,
      'prev': 4,
      'next': 1/12
    },
    'w': {
      'level': 3,
      'prev': 7,
      'next': 0.25
    },
    'd': {
      'level': 4,
      'prev': 24,
      'next': 1/7
    },
    'h': {
      'level': 5,
      'prev': 60,
      'next': 1/24
    },
    'm': {
      'level': 6,
      'prev': 60,
      'next': 1/60
    },
    's': {
      'level': 7,
      'next': 1/60
    }
  }
  order: Array<string> = ['y', 'mo', 'w', 'd', 'h', 'm', 's']

  timeOptions = {
    'y': "Years",
    'mo': 'Months',
    "w": "Weeks",
    "d": "Days",
    "h": "Hours",
    "m": "Minutes",
    "s": "Seconds"
  }
  // timeOptions = [
  //   {shortForm: 'y', dn: 'Years'},
  //   {shortForm: 'mo', dn: 'Months'},
  //   {shortForm: 'm', dn: 'Minutes'}
  // ]

  constructor() { }

  ngOnInit() {
  }

  /**
   * @param src 
   */
  calc(src:string): void {
    let fromPriority = !isNullOrUndefined(this.map) && this.map[this.from] ? this.map[this.from].level : 0;
    let toPriority = !isNullOrUndefined(this.map) && this.map[this.to] ? this.map[this.to].level : 0;
    let order;
    switch(src) {
      case 'from':
        order = fromPriority - toPriority > 0 ? 'next' : 'prev';
        if(this.from == this.to) {
          this.toVal = this.fromVal;
        }else {
          this.toVal = this.fromVal * this.getResult(Math.min(fromPriority -1, toPriority -1), Math.max(toPriority-1, fromPriority-1), order);
        }
        break;
      case 'to':
        order = toPriority - fromPriority > 0 ? 'next' : 'prev';
        if(this.from == this.to) {
          this.fromVal = this.toVal;
        }else {
          this.fromVal = this.toVal * this.getResult(Math.min(fromPriority -1, toPriority -1), Math.max(toPriority-1, fromPriority-1), order);
        }
        break;
      default:
        console.error("Src was wrong");
        break;
    }
  }

  getResult(start: number, end:number, level: string) {
    let final = 1;
    let req = this.order.slice(start, end);
    req.forEach((val) => {
      final = final * this.map[val][level];
    })
    return final;
  }

}
