import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDocsComponent } from './calculator-docs.component';

describe('CalculatorDocsComponent', () => {
  let component: CalculatorDocsComponent;
  let fixture: ComponentFixture<CalculatorDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
