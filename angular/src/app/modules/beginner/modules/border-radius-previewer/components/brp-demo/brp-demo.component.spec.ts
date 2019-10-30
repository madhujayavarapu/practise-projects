import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrpDemoComponent } from './brp-demo.component';

describe('BrpDemoComponent', () => {
  let component: BrpDemoComponent;
  let fixture: ComponentFixture<BrpDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrpDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
