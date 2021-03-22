import { Component, OnInit } from '@angular/core';
import {LocationStoreService} from '../../services/location-store.service';

@Component({
  selector: 'app-weather-homepage',
  templateUrl: './weather-homepage.component.html',
  styleUrls: ['./weather-homepage.component.css']
})
export class WeatherHomepageComponent implements OnInit {
  constructor(private locationStoreService: LocationStoreService) { }

  ngOnInit(): void {
    this.locationStoreService.load();
  }

  handleNewZipcode(zipcode: string): void {
    this.locationStoreService.add(zipcode);
  }

  handleRemoveLocation(zipcode: string): void {
    this.locationStoreService.remove(zipcode);
  }

  get locations(): string[] {
    return this.locationStoreService.locations;
  }

}
