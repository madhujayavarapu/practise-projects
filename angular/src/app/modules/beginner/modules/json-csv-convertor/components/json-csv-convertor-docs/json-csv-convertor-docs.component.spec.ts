import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCsvConvertorDocsComponent } from './json-csv-convertor-docs.component';

describe('JsonCsvConvertorDocsComponent', () => {
  let component: JsonCsvConvertorDocsComponent;
  let fixture: ComponentFixture<JsonCsvConvertorDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonCsvConvertorDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonCsvConvertorDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
