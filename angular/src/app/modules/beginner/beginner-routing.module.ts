import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'border-radius-previewer', pathMatch: 'full'},
  {
    path: 'border-radius-previewer', 
    loadChildren: () => import('./modules/border-radius-previewer/border-radius-previewer.module').then(m => m.BorderRadiusPreviewerModule)
  },
  {
    path: 'cause-effect',
    loadChildren: () => import('./modules/cause-effect/cause-effect.module').then(m => m.CauseEffectModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginnerRoutingModule { }
