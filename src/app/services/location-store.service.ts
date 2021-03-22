import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationStoreService {
  private _locations: string[] = [];
  private readonly localStorageKey: string = 'locations';

  constructor() { }

  add(zipcode: string): void {
    this._locations.push(zipcode);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._locations));
  }

  load(): void {
    const loadedLocationString = localStorage.getItem(this.localStorageKey);
    if (loadedLocationString) {
      this._locations = JSON.parse(loadedLocationString);
    }
  }

  remove(zipcode: string): void {
    this._locations = this._locations.filter(location => location !== zipcode);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._locations));
  }

  get locations(): string[] {
    return this._locations;
  }
}
