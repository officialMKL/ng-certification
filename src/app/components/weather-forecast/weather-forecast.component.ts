import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherHttpService} from '@app/services/weather-http.service';
import {ActivatedRoute} from '@angular/router';
import {IForecastData} from '@app/model/i-weather-data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit, OnDestroy {
  forecast: IForecastData;

  private routeSubscription: Subscription;
  private forecastSubscription: Subscription;

  constructor(private route: ActivatedRoute, private weatherHttpService: WeatherHttpService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.forecastSubscription = this.weatherHttpService.getWeatherForecast(params?.zipcode, 'US', '5').subscribe(forecast => {
        this.forecast = forecast;
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.forecastSubscription.unsubscribe();
  }

}
