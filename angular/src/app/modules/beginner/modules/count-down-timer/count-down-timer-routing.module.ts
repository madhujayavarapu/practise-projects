import { CountDownTimerDocsComponent } from './components/count-down-timer-docs/count-down-timer-docs.component';
import { CountDownTimerDemoComponent } from './components/count-down-timer-demo/count-down-timer-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: CountDownTimerDemoComponent},
  {path: 'docs', component: CountDownTimerDocsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownTimerRoutingModule { }
