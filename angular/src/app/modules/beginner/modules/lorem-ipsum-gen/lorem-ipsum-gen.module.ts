import { NouisliderModule } from 'ng2-nouislider';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoremIpsumGenRoutingModule } from './lorem-ipsum-gen-routing.module';
import { LoremIpsumGenDemoComponent } from './components/lorem-ipsum-gen-demo/lorem-ipsum-gen-demo.component';
import { LoremIpsumGenDocsComponent } from './components/lorem-ipsum-gen-docs/lorem-ipsum-gen-docs.component';
import { SharedModule } from 'src/app/modules/shared';

@NgModule({
  declarations: [LoremIpsumGenDemoComponent, LoremIpsumGenDocsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    LoremIpsumGenRoutingModule,
    NouisliderModule
  ]
})
export class LoremIpsumGenModule { }
