import { ColorCycleDocComponent } from './components/color-cycle-doc/color-cycle-doc.component';
import { ColorCycleDemoComponent } from './components/color-cycle-demo/color-cycle-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: ColorCycleDemoComponent},
  {path: 'docs', component: ColorCycleDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorCycleRoutingModule { }
