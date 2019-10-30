import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'border-radius-previewer', pathMatch: 'full'},
  {
    path: 'border-radius-previewer', 
    loadChildren: () => import('./modules/border-radius-previewer/border-radius-previewer.module').then(m => m.BorderRadiusPreviewerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeginnerRoutingModule { }
