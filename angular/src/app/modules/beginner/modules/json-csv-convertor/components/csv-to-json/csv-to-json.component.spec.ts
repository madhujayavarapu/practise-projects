import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToJsonComponent } from './csv-to-json.component';

describe('CsvToJsonComponent', () => {
  let component: CsvToJsonComponent;
  let fixture: ComponentFixture<CsvToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
