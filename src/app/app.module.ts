import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EnterZipcodeComponent } from './components/enter-zipcode/enter-zipcode.component';
import { WeatherHomepageComponent } from './components/weather-homepage/weather-homepage.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, EnterZipcodeComponent, WeatherHomepageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
