import { FlipImageDocsComponent } from './components/flip-image-docs/flip-image-docs.component';
import { FlipImageDemoComponent } from './components/flip-image-demo/flip-image-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: 'demo', component: FlipImageDemoComponent },
  { path: 'docs', component: FlipImageDocsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlipImageRoutingModule { }
