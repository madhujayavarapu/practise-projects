import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseEffectDocsComponent } from './cause-effect-docs.component';

describe('CauseEffectDocsComponent', () => {
  let component: CauseEffectDocsComponent;
  let fixture: ComponentFixture<CauseEffectDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseEffectDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseEffectDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
