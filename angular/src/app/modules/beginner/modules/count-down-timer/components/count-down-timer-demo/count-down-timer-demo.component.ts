import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../models/IEvent';
import { DateTimeUtilsService } from 'src/app/modules/utils';
import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'ng-count-down-timer-demo',
  templateUrl: './count-down-timer-demo.component.html',
  styleUrls: ['./count-down-timer-demo.component.scss']
})
export class CountDownTimerDemoComponent implements OnInit {

  events: IEvent[] = [
    {
      name: 'New Year',
      date: new Date('2020-01-01')
    },
    {
      name: 'Sankranthi',
      date: new Date("2020-01-15")
    },
    {
      name: "Birthday",
      date: new Date("2020-04-29")
    }
  ]
  constructor(
    private dateUtils: DateTimeUtilsService,
    private modalSrv: ModalService
  ) { }

  ngOnInit() {
    this.getEventsList();
  }

  getEventsList() {
    this.events.push({name: 'Test with Date', date: this.dateUtils.addDays(new Date(), 1)});
    this.events.push({name: 'Test with Minute', date: this.dateUtils.addMinutes(new Date(), 1)});
    this.events.push({name: 'Test with Seconds', date: this.dateUtils.addSeconds(new Date(), 10)});
  }

  openModal() {
    this.modalSrv.init(AddEventComponent, {id: 5}, {});
  }

}
