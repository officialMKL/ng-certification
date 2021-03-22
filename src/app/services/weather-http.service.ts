import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@env/environment';
import {WeatherIconService} from './weather-icon.service';
import {map} from 'rxjs/operators';
import {IForecastData, IWeatherData} from '@app/model/i-weather-data';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {
  private readonly baseUrl = environment.weather.WEATHER_API_BASE_URL;
  private readonly token = environment.weather.WEATHER_API_TOKEN;

  constructor(private http: HttpClient, private weatherIconService: WeatherIconService, private logger: NGXLogger) { }

  getWeatherData(zipcode: string, countrycode: string): Observable<IWeatherData> {
    this.logger.info(`Loading Current Weather Info for Zipcode ${zipcode}`);
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

  getWeatherForecast(zipcode: string, countrycode: string, dayCount: string): Observable<IForecastData> {
    this.logger.info(`Loading Weather Forecast for Zipcode ${zipcode}`);
    return this.http.get<IForecastData>(`${this.baseUrl}/forecast/daily`, {
      params: {
        zip: `${zipcode},${countrycode}`,
        units: 'imperial',
        cnt: dayCount,
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
