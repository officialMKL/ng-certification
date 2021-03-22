import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherHomepageComponent} from './components/weather-homepage/weather-homepage.component';
import {WeatherForecastComponent} from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHomepageComponent
  },
  {
    path: 'forecast/:zipcode',
    component: WeatherForecastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
