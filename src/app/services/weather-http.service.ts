import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IForecastData, IWeatherData} from '../model/i-weather-data';
import {environment} from "../../environments/environment";
import {WeatherIconService} from "./weather-icon.service";
import {flatMap, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {
  private readonly baseUrl = environment.weather.WEATHER_API_BASE_URL;
  private readonly token = environment.weather.WEATHER_API_TOKEN;

  constructor(private http: HttpClient, private weatherIconService: WeatherIconService) { }

  getWeatherData(zipcode: string, countrycode: string): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(`${this.baseUrl}/weather`, {
      params: {
        zip: `${zipcode},${countrycode}`,
        units: 'imperial',
        appid: this.token
      }
    }).pipe(
      map(this.mapIconUrl())
    );
  }

  getWeatherForecast(zipcode: string, countrycode: string): Observable<IForecastData> {
    return this.http.get<IForecastData>(`${this.baseUrl}/forecast/daily`, {
      params: {
        zip: `${zipcode},${countrycode}`,
        units: 'imperial',
        cnt: '5',
        appid: this.token
      }
    }).pipe(
      map(forecast => {
        forecast.list = forecast.list.map(this.mapIconUrl());
        return forecast;
      })
    );
  }

  private mapIconUrl(): (dataset: IWeatherData) => IWeatherData {
    return dataset => {
      dataset.iconUrl = this.weatherIconService.getIconUrl(dataset.weather[0].icon);
      return dataset;
    };
  }
}
