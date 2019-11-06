import { SharedModule } from './../../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorCycleRoutingModule } from './color-cycle-routing.module';
import { ColorCycleDemoComponent } from './components/color-cycle-demo/color-cycle-demo.component';
import { ColorCycleDocComponent } from './components/color-cycle-doc/color-cycle-doc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ColorCycleDemoComponent, ColorCycleDocComponent],
  imports: [
    CommonModule,
    ColorCycleRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ColorCycleModule { }
