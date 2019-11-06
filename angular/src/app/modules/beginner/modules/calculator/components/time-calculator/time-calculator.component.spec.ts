import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCalculatorComponent } from './time-calculator.component';

describe('TimeCalculatorComponent', () => {
  let component: TimeCalculatorComponent;
  let fixture: ComponentFixture<TimeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
