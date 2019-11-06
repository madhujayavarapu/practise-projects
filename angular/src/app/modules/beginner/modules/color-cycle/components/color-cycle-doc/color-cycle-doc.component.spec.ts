import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCycleDocComponent } from './color-cycle-doc.component';

describe('ColorCycleDocComponent', () => {
  let component: ColorCycleDocComponent;
  let fixture: ComponentFixture<ColorCycleDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCycleDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCycleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
