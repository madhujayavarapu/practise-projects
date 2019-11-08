import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCsvConvertorDemoComponent } from './json-csv-convertor-demo.component';

describe('JsonCsvConvertorDemoComponent', () => {
  let component: JsonCsvConvertorDemoComponent;
  let fixture: ComponentFixture<JsonCsvConvertorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonCsvConvertorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonCsvConvertorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
