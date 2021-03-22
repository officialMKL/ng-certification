import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomepageComponent } from './weather-homepage.component';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {EnterZipcodeComponent} from '@app/components/enter-zipcode/enter-zipcode.component';
import {WeatherCardComponent} from '@app/components/weather-card/weather-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WeatherHomepageComponent', () => {
  let component: WeatherHomepageComponent;
  let fixture: ComponentFixture<WeatherHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHomepageComponent, EnterZipcodeComponent, WeatherCardComponent ],
      imports: [LoggerTestingModule, ReactiveFormsModule, HttpClientTestingModule]
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
