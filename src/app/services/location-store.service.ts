import { Injectable } from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LocationStoreService {
  private _locations: string[] = [];
  private readonly localStorageKey: string = 'locations';

  constructor(private logger: NGXLogger) { }

  add(zipcode: string): void {
    this._locations.push(zipcode);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._locations));
    this.logger.info(`Zipcode (${zipcode}) added`);
  }

  load(): void {
    const loadedLocationString = localStorage.getItem(this.localStorageKey);
    if (loadedLocationString) {
      this._locations = JSON.parse(loadedLocationString);
      this.logger.info(`locations loaded`);
    }
  }

  remove(zipcode: string): void {
    this._locations = this._locations.filter(location => location !== zipcode);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._locations));
    this.logger.info(`Zipcode (${zipcode}) removed`);
  }

  get locations(): string[] {
    return this._locations;
  }
}
