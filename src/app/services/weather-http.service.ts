import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeatherData} from '../model/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  constructor(private http: HttpClient) { }

  getWeatherData(zipcode: string, countrycode: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        zip: `${zipcode},${countrycode}`,
        units: 'imperial',
        appid: '5a4b2d457ecbef9eb2a71e480b947604'
      }
    });
  }
}
