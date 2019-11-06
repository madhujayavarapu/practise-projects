import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCycleDemoComponent } from './color-cycle-demo.component';

describe('ColorCycleDemoComponent', () => {
  let component: ColorCycleDemoComponent;
  let fixture: ComponentFixture<ColorCycleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCycleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCycleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
