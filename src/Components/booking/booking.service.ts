import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  


  
  constructor(private http: HttpClient) {}

  // submitBooking(data: any, language: string = 'en') {
  //   const headers = new HttpHeaders({
  //     'X-Customer-ID': 'SE00151',
  //     'X-Language': language
  //   });
  //   console.log('Language set in headers:', language);
  //   return this.http.post(environment.apiUrl, data, { headers });
  // }


  submitBooking(data: any, language: string = 'en') {
    console.log('Language parameter:', language);

    return this.http.post(environment.apiUrl, data);
  }
 

}
