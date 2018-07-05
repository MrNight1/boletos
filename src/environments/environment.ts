// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyD0TcQdvVdlKMmUvIR5OrDOEJ8U_rCFgME',
    authDomain: 'boletos-dev.firebaseapp.com',
    databaseURL: 'https://boletos-dev.firebaseio.com',
    projectId: 'boletos-dev',
    storageBucket: 'boletos-dev.appspot.com',
    messagingSenderId: '458777228441'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
