import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorDemoComponent } from './components/calculator-demo/calculator-demo.component';
import { CalculatorDocsComponent } from './components/calculator-docs/calculator-docs.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TimeCalculatorComponent } from './components/time-calculator/time-calculator.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgFormsModule } from 'src/app/modules/ng-forms/ng-forms.module';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { NumberConvertorComponent } from './components/number-convertor/number-convertor.component';

@NgModule({
  declarations: [CalculatorDemoComponent, CalculatorDocsComponent, CalculatorComponent, TimeCalculatorComponent, DropdownComponent, CurrencyCalculatorComponent, NumberConvertorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SharedModule,
    FormsModule,
    NgFormsModule
  ]
})
export class CalculatorModule { }
