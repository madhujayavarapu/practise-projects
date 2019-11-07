import { Component, OnInit } from '@angular/core';
import { Requirement } from 'src/app/modules/shared';

@Component({
  selector: 'ng-count-down-timer-docs',
  templateUrl: './count-down-timer-docs.component.html',
  styleUrls: ['./count-down-timer-docs.component.scss']
})
export class CountDownTimerDocsComponent implements OnInit {

  constraints: Requirement[] = [
    {req: "Use only builtin language functions for your calculations rather than relying on a library or package like MomentJS. This assumes, of course, that the language of your choice has adequate date and time manipulation functions built in."},
    {req: "You may not use any code generators such as the Counting Down To site. You should develop your own original implementation"}
  ];

  userStories: Requirement[] = [
    {
      completed: false,
      req: "User can see an event input box containing an event name field, an date field, an optional time, and a 'Start' button."
    },
    {
      completed: false,
      req: "User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event. If the time is omitted it is assumed to be at Midnight on the event date in the local time zone."
    },
    {
      completed: false,
      req: "User can see a warning message if the event name is blank."
    },
    {
      completed: false,
      req: " User can see a warning message if the event date or time are incorrectly entered."
    },
    {
      completed: false,
      req: "User can see a warning message if the time until the event data and time that has been entered would overflow the precision of the countdown timer."
    },
    {
      completed: false,
      req: "User can click on the 'Start' button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place."
    },
    {
      completed: false,
      req: "User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display."
    }
  ];
  
  bonusFeatures: Requirement[] = [
    {
      completed: false,
      req: "User can save the event so that it persists across sessions."
    },
    {
      completed: false,
      req: "User can see an alert when the event is reached."
    },
    {
      completed: false,
      req: "User can specify more than one event."
    },
    {
      completed: false,
      req: "User can see a countdown timers for each event that has been defined."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
