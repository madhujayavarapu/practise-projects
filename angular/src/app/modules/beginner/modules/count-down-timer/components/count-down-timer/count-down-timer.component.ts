import { IEvent } from './../../models/IEvent';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DateTimeUtilsService } from 'src/app/modules/utils';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ng-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

  @Input('model') model:number;
  @Input("event") event: IEvent;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  
  diffMilliSeconds: number | string;

  constructor(
    private dateUtils: DateTimeUtilsService
  ) { }

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      this.seconds -= 1;
      if(this.seconds <= 0){
        if(this.minutes < 1) {
          if(this.hours < 1) {
            if(this.days > 0){
              this.days -= 1;
              this.hours = 23;
            }else {
              this.days = 0;
              this.hours = 0;
              this.minutes = 0;
              this.seconds = 0;
            }
          }else {
            this.hours -= 1;
            this.minutes = 59;
          }
        }else {
          this.minutes -= 1;
          this.seconds = 59
        }
      }
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!isNullOrUndefined(changes) && !isNullOrUndefined(changes.event)) {
      this.diffMilliSeconds = this.dateUtils.getDiffFromCurrentDate(changes.event.currentValue.date, {exact: true});
      let arr = this.diffMilliSeconds.toString().split(':');
      this.days = parseInt(arr[0]);
      this.hours = parseInt(arr[1]);
      this.minutes = parseInt(arr[2]);
      this.seconds = parseInt(arr[3]);
    }
   }

}
