import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerDocsComponent } from './count-down-timer-docs.component';

describe('CountDownTimerDocsComponent', () => {
  let component: CountDownTimerDocsComponent;
  let fixture: ComponentFixture<CountDownTimerDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownTimerDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
