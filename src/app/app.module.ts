import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {EnterZipcodeComponent} from '@app/components/enter-zipcode/enter-zipcode.component';
import {WeatherHomepageComponent} from '@app/components/weather-homepage/weather-homepage.component';
import {WeatherCardComponent} from '@app/components/weather-card/weather-card.component';
import {WeatherForecastComponent} from '@app/components/weather-forecast/weather-forecast.component';
import {LoggerModule} from 'ngx-logger';
import {environment} from '@env/environment';
import { CastToMilisecondsPipe } from './pipes/cast-to-miliseconds.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggerModule.forRoot(environment.logging),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EnterZipcodeComponent,
    WeatherHomepageComponent,
    WeatherCardComponent,
    WeatherForecastComponent,
    CastToMilisecondsPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
