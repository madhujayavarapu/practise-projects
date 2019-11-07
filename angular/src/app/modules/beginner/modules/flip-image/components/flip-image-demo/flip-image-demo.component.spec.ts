import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipImageDemoComponent } from './flip-image-demo.component';

describe('FlipImageDemoComponent', () => {
  let component: FlipImageDemoComponent;
  let fixture: ComponentFixture<FlipImageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipImageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipImageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
