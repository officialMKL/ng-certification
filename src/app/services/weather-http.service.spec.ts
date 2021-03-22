import { TestBed } from '@angular/core/testing';

import { WeatherHttpService } from './weather-http.service';
import {LoggerTestingModule} from 'ngx-logger/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WeatherHttpService', () => {
  let service: WeatherHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoggerTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(WeatherHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
