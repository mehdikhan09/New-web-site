import { MatDialog } from '@angular/material/dialog';
import { BookingMessageDialog } from './booking-message-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../../app/services/config.service';
import { timeout } from 'rxjs/operators';
// ...existing imports...
// ...existing imports...
import { Component } from '@angular/core';
console.log('Imported Component from @angular/core');
import { MatFormFieldModule } from '@angular/material/form-field';
console.log('Imported MatFormFieldModule from @angular/material/form-field');
import { MatIconModule } from '@angular/material/icon';
console.log('Imported MatIconModule from @angular/material/icon');
import { MatButtonToggleModule } from '@angular/material/button-toggle';
console.log('Imported MatButtonToggleModule from @angular/material/button-toggle');
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
console.log('Imported MatInputModule from @angular/material/input');
import { MatSelectModule } from '@angular/material/select';
console.log('Imported MatSelectModule from @angular/material/select');
import { MatDatepickerModule } from '@angular/material/datepicker';
console.log('Imported MatDatepickerModule from @angular/material/datepicker');
import { MatNativeDateModule } from '@angular/material/core';
console.log('Imported MatNativeDateModule from @angular/material/core');
import { CommonModule } from '@angular/common';
console.log('Imported CommonModule from @angular/common');
import { FormsModule } from '@angular/forms';
console.log('Imported FormsModule from @angular/forms');
import { TranslateModule, TranslateService } from '@ngx-translate/core';
console.log('Imported TranslateModule from @ngx-translate/core');
import { BookingService } from './booking.service';
import { AfterViewInit } from '@angular/core';
console.log('Imported BookingService from ./booking.service');



@Component({
  selector: 'app-booking',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    TranslateModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    BookingMessageDialog, // Used programmatically for API response dialogs
    HttpClientModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.css'
})
export class Booking implements AfterViewInit {
  public isLoading: boolean = false;
  public responseMessage: string = '';
  public responseSuccess: boolean = false;
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
  public campusTypeText: string = '';

  onCampusTypeChange(event: any) {
    this.campusTypeText = event.source.triggerValue;
  }
  public movingTypeText: string = '';

  onMovingTypeChange(event: any) {
    this.movingTypeText = event.source.triggerValue;
  }

    public windowTypeText: string = '';

    onWindowTypeChange(event: any) {
      this.windowTypeText = event.source.triggerValue;
      // Optionally log or use this value
      console.log('Window Type Text:', this.windowTypeText);
    }

  public windowType: string = '';
  public today: Date = new Date();

 public TypeOfCleaningService: string = '';
 public PreferredDate: string = '';
 public PreferredTime: string = '';
 public FullName: string = '';
 public EmailAddress: string = '';
 public PhoneNumber: string = '';
 public CivicNumber: string = '';
 public Address: string = '';
 public PostalCode: string = '';
 public City: string = '';
 public Apartment: string = '';
 public OtherInformation: string = '';
 public serviceTypetxt: string = '';
 public campustype: string = '';
 public BalconyCleaning: string = 'No';
 public GridCleaning: string = 'No';
 public StorageRoom: string = 'No';


  public preferredDate: string = '';   // yyyy-MM-dd format
  public preferredTime: string = '';   // HH:mm:ss
  public fullName: string = '';
  public emailAddress: string = '';
  public phoneNumber: string = '';
  public civicNumber: string = '';
  public address: string = '';
  public postalCode: string = '';
  public city: string = '';
  public apartment: string = '';
  public otherInformation: string = '';
  public mainDate: Date | null = null;
  public serviceType = '';
  public campusType = '';
  public windowno = '';
  public selectedTime = '';
  public movingDate: Date | null = null;
  public movingType = '';
  public name = '';
  public email = '';
  public phone = '';
  public personalid = '';
  public message = '';
  public numberzip = '';
  public bookingStatus: string = '';
  public allBookingData: any = {};
  public furnitureAssembly = '';
  public packingService = '';
  public storageService = '';
  public formSubmitted = false; // Track if form has been submitted

  constructor(
    private bookingService: BookingService,
    private dialog: MatDialog,
    private translate: TranslateService,
    private http: HttpClient,
    private configService: ConfigService
  ) {}

  // Validation method to check if all required fields are filled
  validateForm(): string[] {
    const errors: string[] = [];
    
    // Check service type
    if (!this.serviceType) {
      errors.push('Service type is required');
    }
    
    // Check conditional required fields based on service type
    if (this.serviceType === 'Campus' && !this.campusType) {
      errors.push('Campus type is required');
    }
    
    if (this.serviceType === 'window') {
      if (!this.windowType) {
        errors.push('Window type is required');
      }
      if (!this.windowno) {
        errors.push('Number of windows is required');
      }
    }
    
    if (this.serviceType === 'moving' && !this.movingType) {
      errors.push('Moving type is required');
    }
    
    // Check main date
    if (!this.mainDate) {
      errors.push('Date is required');
    }
    
    // Check selected time
    if (!this.selectedTime) {
      errors.push('Time slot is required');
    }
    
    // Check personal information
    if (!this.name || this.name.trim() === '') {
      errors.push('Name is required');
    }
    
    if (!this.email || this.email.trim() === '') {
      errors.push('Email is required');
    } else if (!this.isValidEmail(this.email)) {
      errors.push('Valid email is required');
    }
    
    if (!this.phone || this.phone.trim() === '') {
      errors.push('Phone number is required');
    }
    
    if (!this.personalid || this.personalid.trim() === '') {
      errors.push('Personal ID is required');
    }
    
    if (!this.address || this.address.trim() === '') {
      errors.push('Address is required');
    }
    
    return errors;
  }
  
  // Email validation helper method
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  submitBooking() {
    // Mark form as submitted for validation display
    this.formSubmitted = true;
    
    // First validate the form
    const validationErrors = this.validateForm();
    
    if (validationErrors.length > 0) {
      // Log validation errors and stop submission
      console.log('Form validation failed:', validationErrors.join(', '));
      return;
    }
    
    // If validation passes, proceed with submission
    this.responseMessage = '';
    this.responseSuccess = false;
    this.isLoading = true;
    
    // Format date properly to avoid timezone issues
    let formattedDate = '';
    if (this.mainDate) {
      const year = this.mainDate.getFullYear();
      const month = String(this.mainDate.getMonth() + 1).padStart(2, '0');
      const day = String(this.mainDate.getDate()).padStart(2, '0');
      formattedDate = `${year}-${month}-${day}`;
      console.log('Selected date:', this.mainDate);
      console.log('Formatted date for API:', formattedDate);
    }
    let serviceTypetxt = '';
    
    switch (this.serviceType) {
      case 'Campus':
        serviceTypetxt = 'Campus Moving Cleaning';
        this.OtherInformation = 'Type of move-in cleaning on campus: ' + this.campusTypeText + '\n' + 'message:' + this.message;
        break;
      case 'moving':
        serviceTypetxt = 'Moving cleaning';
        this.OtherInformation = 'Move Out Cleaning Type: ' + this.movingTypeText + '\n'
          + 'Balcony Cleaning: ' + this.furnitureAssembly + '\n'
          + 'Glazed Balcony Cleaning: ' + this.packingService + '\n'
          + 'Storage Room Cleaning: ' + this.storageService + '\n'
          + 'Message: ' + this.message;
        break;
      case 'window':
        serviceTypetxt = 'Window cleaning';
        this.OtherInformation = 'Move Out Cleaning Type: ' + this.windowTypeText + '\n'
          + 'No of Windows: ' + this.windowno + '\n'
          + 'Message: ' + this.message;
        break;
      case 'home':
        serviceTypetxt = 'Home cleaning';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      case 'office':
        serviceTypetxt = 'Office cleaning';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      case 'other':
        serviceTypetxt = 'General cleaning';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      case 'homevisit':
        serviceTypetxt = 'Home visit (free of charge)';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      case 'floorscrubbing':
        serviceTypetxt = 'Floor Scrubbing';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      case 'construction':
        serviceTypetxt = 'Construction cleaning';
        this.OtherInformation = 'Message: ' + this.message;
        break;
      default:
        serviceTypetxt = this.serviceType;
    }
    
    this.allBookingData = {
      CleaningTypeName: serviceTypetxt,
      PreferredDate: formattedDate,
      PreferredTime: this.selectedTime,
      FullName: this.name,
      EmailAddress: this.email,
      PhoneNumber: this.phone,
      PersonalNumber: this.personalid,
      FullAddress: this.address,
      ApartmentNumber: this.apartment,
      PostalCode: this.numberzip,
      City: this.city,
      Comments: this.OtherInformation,
      Language: "en",
    };
    
    // Send booking data to API
    this.sendBookingToAPI();
  }
  
  // Send booking data to API using ConfigService
  private sendBookingToAPI() {
    if (!this.configService.isConfigValid()) {
      console.error('API configuration is invalid');
      this.isLoading = false;
      this.showApiErrorDialog('System configuration error. Please try again later.');
      return;
    }

    // Get API URL and headers from ConfigService
    const apiUrl = this.configService.getApiUrl('booking');
    const headers = this.configService.getApiHeaders();
    const securityConfig = this.configService.getSecurityConfig();

    // Secure logging
    console.log('Sending booking request...');
    console.log('Booking payload contains:', {
      CleaningTypeName: this.allBookingData.CleaningTypeName || 'Missing',
      PreferredDate: this.allBookingData.PreferredDate || 'Missing',
      FullName: this.allBookingData.FullName || 'Missing',
      EmailAddress: '***@***.***',
      PhoneNumber: '***-***-****',
      Language: this.allBookingData.Language
    });

    // Set timeout for the request
    const requestOptions = {
      headers: headers
    };

    this.http.post(apiUrl, this.allBookingData, requestOptions)
      .pipe(timeout(securityConfig.timeout))
      .subscribe({
      next: (response: any) => {
        console.log('Booking submitted successfully');
        this.isLoading = false;
        
        // Show success popup
        this.dialog.open(BookingMessageDialog, {
          data: { 
            message: 'Your booking has been submitted successfully! We will contact you soon to confirm your appointment.', 
            success: true 
          },
          width: '400px',
          disableClose: false,
          panelClass: 'booking-success-dialog'
        });
        
        // Clear form after successful submission
        this.clearForm();
      },
      error: (error) => {
        console.error('Booking submission failed');
        this.isLoading = false;
        
        // Show error message based on error type
        let errorMessage = 'Sorry, there was an error submitting your booking. Please try again later.';
        
        if (error.status === 0) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection and try again.';
        } else if (error.status === 429) {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        } else if (error.status >= 500) {
          errorMessage = 'Server error. Please try again in a few minutes.';
        }
        
        // Show error popup
        this.showApiErrorDialog(errorMessage);
      }
    });
  }
  
  // Show error dialog only for API responses
  private showApiErrorDialog(message: string) {
    this.dialog.open(BookingMessageDialog, {
      data: { 
        message: message, 
        success: false 
      },
      width: '400px',
      disableClose: false,
      panelClass: 'booking-error-dialog'
    });
  }
  
  // WhatsApp messaging functionality
  
  
 
  
 
  clearForm() {
    this.serviceType = '';
    this.campusType = '';
    this.windowno = '';
    this.selectedTime = '';
    this.movingDate = null;
    this.movingType = '';
    this.name = '';
    this.email = '';
    this.phone = '';
    this.personalid = '';
    this.message = '';
    this.numberzip = '';
    this.address = '';
    this.apartment = '';
    this.city = '';
    this.mainDate = null;
    this.furnitureAssembly = '';
    this.packingService = '';
    this.storageService = '';
    this.formSubmitted = false; // Reset submission flag
  }
}
