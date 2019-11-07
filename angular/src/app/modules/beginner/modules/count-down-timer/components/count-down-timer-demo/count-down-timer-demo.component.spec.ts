import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerDemoComponent } from './count-down-timer-demo.component';

describe('CountDownTimerDemoComponent', () => {
  let component: CountDownTimerDemoComponent;
  let fixture: ComponentFixture<CountDownTimerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownTimerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
