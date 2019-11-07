import { SharedModule } from './../../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownTimerRoutingModule } from './count-down-timer-routing.module';
import { CountDownTimerDemoComponent } from './components/count-down-timer-demo/count-down-timer-demo.component';
import { CountDownTimerDocsComponent } from './components/count-down-timer-docs/count-down-timer-docs.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { UtilsModule } from 'src/app/modules/utils';
import { AddEventComponent } from './components/add-event/add-event.component';

@NgModule({
  declarations: [
    CountDownTimerDemoComponent, 
    CountDownTimerDocsComponent, 
    CountDownTimerComponent, 
    // AddEventComponent
  ],
  imports: [
    CommonModule,
    CountDownTimerRoutingModule,
    SharedModule,
    UtilsModule
  ],
  exports: [
    CountDownTimerComponent
  ]
})
export class CountDownTimerModule { }
