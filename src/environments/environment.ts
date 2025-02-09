// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  weather: {
    WEATHER_API_BASE_URL: 'https://api.openweathermap.org/data/2.5',
    WEATHER_API_TOKEN: '5a4b2d457ecbef9eb2a71e480b947604'
  },
  logging: {
    level: NgxLoggerLevel.DEBUG
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
