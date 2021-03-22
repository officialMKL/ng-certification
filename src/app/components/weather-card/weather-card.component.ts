import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IWeatherData} from '@app/model/i-weather-data';
import {WeatherHttpService} from '@app/services/weather-http.service';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

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
    }, (error: HttpErrorResponse) => {
      this.removeLocationChange.emit(this.zipcode);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleRemoveLocation(): void {
    this.removeLocationChange.emit(this.zipcode);
  }

}
