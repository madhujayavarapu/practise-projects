import { BrpDocComponent } from './components/brp-doc/brp-doc.component';
import { BrpDemoComponent } from './components/brp-demo/brp-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: BrpDemoComponent},
  {path: 'docs', component: BrpDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorderRadiusPreviewerRoutingModule { }
