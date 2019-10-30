import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './components/page-info/page-info.component';

@NgModule({
  declarations: [
    PageInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    PageInfoComponent
  ]
})
export class SharedModule { }
