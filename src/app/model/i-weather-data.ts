export interface IForecastData {
  city: ICity;
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherData[];
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoordinates;
  country: string;
  population: number;
  timezone: number;
}

export interface IWeatherData {
  base: string;
  coord: ICoordinates;
  weather: IWeather[];
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  temp?: ITemp;
  iconUrl?: string;
}

export interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  monr: number;
}

export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}


