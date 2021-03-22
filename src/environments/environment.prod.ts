import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: true,
  weather: {
    WEATHER_API_BASE_URL: 'https://api.openweathermap.org/data/2.5',
    WEATHER_API_TOKEN: '5a4b2d457ecbef9eb2a71e480b947604'
  },
  logging: {
    level: NgxLoggerLevel.ERROR
  }
};
