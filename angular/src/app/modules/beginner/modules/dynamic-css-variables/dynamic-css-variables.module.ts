import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicCssVariablesRoutingModule } from './dynamic-css-variables-routing.module';
import { DcvDemoComponent } from './components/dcv-demo/dcv-demo.component';
import { DcvDocsComponent } from './components/dcv-docs/dcv-docs.component';
import { SharedModule } from 'src/app/modules/shared';

@NgModule({
  declarations: [DcvDemoComponent, DcvDocsComponent],
  imports: [
    CommonModule,
    DynamicCssVariablesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DynamicCssVariablesModule { }
