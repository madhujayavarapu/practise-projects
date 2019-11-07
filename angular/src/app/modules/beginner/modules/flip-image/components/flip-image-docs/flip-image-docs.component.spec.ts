import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipImageDocsComponent } from './flip-image-docs.component';

describe('FlipImageDocsComponent', () => {
  let component: FlipImageDocsComponent;
  let fixture: ComponentFixture<FlipImageDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipImageDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipImageDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
