import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly config = environment.apiConfig;
  private readonly security = environment.security;
  
  // Decrypt encrypted configuration values
  private decryptConfig(encryptedValue: string): string {
    try {
      // Reverse the string and then decode base64
      const reversed = encryptedValue.split('').reverse().join('');
      return atob(reversed);
    } catch (e) {
      console.warn('Failed to decrypt config value, using as-is');
      return encryptedValue;
    }
  }
  
  // Get decrypted API configuration
  getApiConfig() {
    return {
      baseUrl: this.security?.enableEncryption ? this.decryptConfig(this.config.baseUrl) : this.config.baseUrl,
      endpoints: {
        inquiries: this.security?.enableEncryption ? this.decryptConfig(this.config.endpoints.inquiries) : this.config.endpoints.inquiries,
        booking: this.security?.enableEncryption ? this.decryptConfig(this.config.endpoints.booking) : this.config.endpoints.booking
      },
      headers: this.config.headers
    };
  }
  
  // Get full API URL for specific endpoint
  getApiUrl(endpoint: keyof typeof this.config.endpoints): string {
    const decryptedConfig = this.getApiConfig();
    return `${decryptedConfig.baseUrl}${decryptedConfig.endpoints[endpoint]}`;
  }
  
  // Get headers for API requests
  getApiHeaders(): { [key: string]: string } {
    return { ...this.config.headers };
  }
  
  // Method to validate API configuration
  isConfigValid(): boolean {
    const decryptedConfig = this.getApiConfig();
    return !!(decryptedConfig.baseUrl && 
              decryptedConfig.endpoints && 
              decryptedConfig.headers);
  }
  
  // Get security settings
  getSecurityConfig() {
    return {
      timeout: this.security?.apiTimeout || 30000,
      retryAttempts: this.security?.retryAttempts || 3,
      encryptionEnabled: this.security?.enableEncryption || false
    };
  }
}