import { LoremIpsumGenDocsComponent } from './components/lorem-ipsum-gen-docs/lorem-ipsum-gen-docs.component';
import { LoremIpsumGenDemoComponent } from './components/lorem-ipsum-gen-demo/lorem-ipsum-gen-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: 'demo', component: LoremIpsumGenDemoComponent},
  {path: 'docs', component: LoremIpsumGenDocsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoremIpsumGenRoutingModule { }
