import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-calculator-demo',
  templateUrl: './calculator-demo.component.html',
  styleUrls: ['./calculator-demo.component.scss']
})
export class CalculatorDemoComponent implements OnInit {

  activeCalculator: string = 'basic';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openCalc(type: string): void {
    this.activeCalculator = type;
    // this.router.navigate(['.'], {queryParams: {'type': type}});
  }

}
