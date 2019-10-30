import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseEffectDemoComponent } from './cause-effect-demo.component';

describe('CauseEffectDemoComponent', () => {
  let component: CauseEffectDemoComponent;
  let fixture: ComponentFixture<CauseEffectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseEffectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseEffectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
