import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.contact';

@Injectable({ providedIn: 'root' })
export class ContactUsService {
  constructor(private http: HttpClient) {}

  sendContact(data: any, language: string = 'en') {
    const headers = new HttpHeaders({
      'X-Customer-ID': 'SE00151',
      'X-Language': language
    });
    return this.http.post(environment.contactApiUrl, data, { headers });
  }
}
