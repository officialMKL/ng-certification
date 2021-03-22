import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherHomepageComponent} from './components/weather-homepage/weather-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherHomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
