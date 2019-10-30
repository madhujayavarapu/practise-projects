import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BorderRadiusPreviewerRoutingModule } from './border-radius-previewer-routing.module';
import { BrpDemoComponent } from './components/brp-demo/brp-demo.component';
import { BrpDocComponent } from './components/brp-doc/brp-doc.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NouisliderModule } from 'ng2-nouislider';
import { ClipboardModule } from 'src/app/modules/shared/modules/clipboard';

@NgModule({
  declarations: [
    BrpDemoComponent, 
    BrpDocComponent
  ],
  imports: [
    CommonModule,
    BorderRadiusPreviewerRoutingModule,
    SharedModule,
    ClipboardModule,
    FormsModule,
    NouisliderModule,
    ReactiveFormsModule
  ]
})
export class BorderRadiusPreviewerModule { }
