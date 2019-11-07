import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlipImageRoutingModule } from './flip-image-routing.module';
import { SharedModule } from 'src/app/modules/shared';
import { FlipImageDemoComponent } from './components/flip-image-demo/flip-image-demo.component';
import { FlipImageDocsComponent } from './components/flip-image-docs/flip-image-docs.component';

@NgModule({
  declarations: [FlipImageDemoComponent, FlipImageDocsComponent],
  imports: [
    CommonModule,
    FlipImageRoutingModule,
    SharedModule
  ]
})
export class FlipImageModule { }
