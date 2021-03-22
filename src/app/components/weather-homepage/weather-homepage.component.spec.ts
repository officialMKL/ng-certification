import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomepageComponent } from './weather-homepage.component';

describe('WeatherHomepageComponent', () => {
  let component: WeatherHomepageComponent;
  let fixture: ComponentFixture<WeatherHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
