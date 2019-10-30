import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'beginner', pathMatch: 'full' },
  { path: 'beginner', loadChildren: () => import('./modules/beginner/beginner.module').then(m => m.BeginnerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
