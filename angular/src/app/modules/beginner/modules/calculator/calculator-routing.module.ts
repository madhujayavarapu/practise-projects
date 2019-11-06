import { CalculatorDocsComponent } from './components/calculator-docs/calculator-docs.component';
import { CalculatorDemoComponent } from './components/calculator-demo/calculator-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: CalculatorDemoComponent},
  {path: 'docs', component: CalculatorDocsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
