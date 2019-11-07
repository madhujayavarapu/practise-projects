import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcvDemoComponent } from './dcv-demo.component';

describe('DcvDemoComponent', () => {
  let component: DcvDemoComponent;
  let fixture: ComponentFixture<DcvDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcvDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcvDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
