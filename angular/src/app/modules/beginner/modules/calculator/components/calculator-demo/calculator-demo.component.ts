import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-calculator-demo',
  templateUrl: './calculator-demo.component.html',
  styleUrls: ['./calculator-demo.component.scss']
})
export class CalculatorDemoComponent implements OnInit {

  activeCalculator: string = 'basic';
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.activeCalculator = params.type || 'basic';
    })
  }

  openCalc(type: string): void {
    this.activeCalculator = type;
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {'type': type}, queryParamsHandling: 'merge'});
  }

}
