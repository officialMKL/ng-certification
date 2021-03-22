import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IWeatherData} from '../../model/i-weather-data';
import {WeatherHttpService} from '../../services/weather-http.service';
import {Subscription} from 'rxjs';
import {WeatherIconService} from '../../services/weather-icon.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  @Input()
  zipcode: string;

  @Output()
  removeLocationChange: EventEmitter<string> = new EventEmitter<string>();

  weatherData: IWeatherData;
  private subscription: Subscription;

  constructor(private weatherHttpService: WeatherHttpService) { }

  ngOnInit(): void {
    this.subscription = this.weatherHttpService.getWeatherData(this.zipcode, 'US').subscribe(weatherData => {
      this.weatherData = weatherData;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleRemoveLocation(): void {
    this.removeLocationChange.emit(this.zipcode);
  }

}
