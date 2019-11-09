import { LayoutModule } from './modules/layout/layout.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    return {fixture, app};
  }

  it('should create the app', () => {
    const {fixture, app} = setup();
    expect(app).toBeTruthy();
  });
});
