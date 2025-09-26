// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiConfig: {
    // Base64 encoded for basic security (decode: atob())
    baseUrl: btoa('https://nojdstad-api.azurewebsites.net').split('').reverse().join(''), // Encrypted URL
    endpoints: {
      inquiries: btoa('/inquiries').split('').reverse().join(''), // Encrypted endpoint
      booking: btoa('/cleaning-requests').split('').reverse().join('')     // Encrypted endpoint
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Client-Version': '1.0.0'
    }
  },
  // Security settings
  security: {
    enableEncryption: true,
    apiTimeout: 30000,
    retryAttempts: 3
  }
};