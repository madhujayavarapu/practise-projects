import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrpDocComponent } from './brp-doc.component';

describe('BrpDocComponent', () => {
  let component: BrpDocComponent;
  let fixture: ComponentFixture<BrpDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrpDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrpDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
