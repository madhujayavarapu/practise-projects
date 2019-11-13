import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumGenDocsComponent } from './lorem-ipsum-gen-docs.component';

describe('LoremIpsumGenDocsComponent', () => {
  let component: LoremIpsumGenDocsComponent;
  let fixture: ComponentFixture<LoremIpsumGenDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremIpsumGenDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremIpsumGenDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
