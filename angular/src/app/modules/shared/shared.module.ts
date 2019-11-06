import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageInfoComponent } from './components/page-info/page-info.component';
import { ReqListComponent } from './components/req-list/req-list.component';

@NgModule({
  declarations: [
    PageInfoComponent,
    ReqListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    PageInfoComponent,
    ReqListComponent
  ]
})
export class SharedModule { }
