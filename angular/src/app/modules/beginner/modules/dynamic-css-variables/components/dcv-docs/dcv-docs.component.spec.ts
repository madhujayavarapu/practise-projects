import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcvDocsComponent } from './dcv-docs.component';

describe('DcvDocsComponent', () => {
  let component: DcvDocsComponent;
  let fixture: ComponentFixture<DcvDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcvDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcvDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
