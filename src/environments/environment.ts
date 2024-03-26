// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseAddress: `http://${window.location.hostname}:3002/`,
    baseAddress2: `http://${window.location.hostname}:8080/`,
  }
}