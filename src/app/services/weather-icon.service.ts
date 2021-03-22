import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {

  constructor() { }

  getIconUrl(iconCode: string): string {
    let name: string;
    if (iconCode.indexOf('01') >= 0) {
      name = 'sun';
    } else if (iconCode.indexOf('02') >= 0 || iconCode.indexOf('03') >= 0 || iconCode.indexOf('04') >= 0) {
      name = 'clouds';
    } else if (iconCode.indexOf('09') >= 0 || iconCode.indexOf('10') >= 0) {
      name = 'rain';
    } else if (iconCode.indexOf('13') >= 0) {
      name = 'snow';
    }

    if (!name) {
      return '';
    }

    return `./assets/${name}.png`;
  }
}
