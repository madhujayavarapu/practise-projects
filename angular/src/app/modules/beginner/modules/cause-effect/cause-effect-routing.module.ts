import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CauseEffectDemoComponent } from './components/cause-effect-demo/cause-effect-demo.component';
import { CauseEffectDocsComponent } from './components/cause-effect-docs/cause-effect-docs.component';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {
    path: 'demo',
    component: CauseEffectDemoComponent
  },
  {
    path: 'docs',
    component: CauseEffectDocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CauseEffectRoutingModule { }
