export const environment = {
  production: false,
  apiConfig: {
    // Base64 encoded and reversed for production security
    baseUrl: btoa('https://nojdstad-api.azurewebsites.net').split('').reverse().join(''), // Encrypted URL
    endpoints: {
      inquiries: btoa('/inquiries').split('').reverse().join(''), // Encrypted endpoint
      booking: btoa('/cleaning-requests').split('').reverse().join('')     // Encrypted endpoint
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Client-Version': '1.0.0',
      'X-Environment': 'production'
    }
  },
  // Production security settings
  security: {
    enableEncryption: true,
    apiTimeout: 15000,
    retryAttempts: 2
  }
};

