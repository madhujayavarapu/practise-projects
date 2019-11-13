import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelConvertorComponent } from './excel-convertor.component';

describe('ExcelConvertorComponent', () => {
  let component: ExcelConvertorComponent;
  let fixture: ComponentFixture<ExcelConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelConvertorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
