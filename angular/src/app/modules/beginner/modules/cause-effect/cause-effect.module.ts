import { SharedModule } from './../../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CauseEffectRoutingModule } from './cause-effect-routing.module';
import { CauseEffectDemoComponent } from './components/cause-effect-demo/cause-effect-demo.component';
import { CauseEffectDocsComponent } from './components/cause-effect-docs/cause-effect-docs.component';

@NgModule({
  declarations: [CauseEffectDemoComponent, CauseEffectDocsComponent],
  imports: [
    CommonModule,
    CauseEffectRoutingModule,
    SharedModule
  ]
})
export class CauseEffectModule { }
