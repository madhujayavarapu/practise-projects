import { DcvDocsComponent } from './components/dcv-docs/dcv-docs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcvDemoComponent } from './components/dcv-demo/dcv-demo.component';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: DcvDemoComponent},
  {path: 'docs', component: DcvDocsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicCssVariablesRoutingModule { }
