import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremIpsumGenDemoComponent } from './lorem-ipsum-gen-demo.component';

describe('LoremIpsumGenDemoComponent', () => {
  let component: LoremIpsumGenDemoComponent;
  let fixture: ComponentFixture<LoremIpsumGenDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremIpsumGenDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremIpsumGenDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
