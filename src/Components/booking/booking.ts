import { MatDialog } from '@angular/material/dialog';
import { BookingMessageDialog } from './booking-message-dialog.component';
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
  BookingMessageDialog
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

  constructor(
    private bookingService: BookingService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) {}

  submitBooking() {
    this.responseMessage = '';
    this.responseSuccess = false;
    this.isLoading = true;
    let formattedDate = this.mainDate ? this.mainDate.toISOString().slice(0, 10) : '';
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
  const lang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
  this.bookingService.submitBooking(this.allBookingData, lang).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.responseSuccess = true;
        this.dialog.open(BookingMessageDialog, {
          data: { message: 'Booking submitted successfully!', success: true },
        });
        this.clearForm();
      },
      error: (error) => {
        this.isLoading = false;
        this.responseSuccess = false;
        this.dialog.open(BookingMessageDialog, {
          data: { message: 'Booking failed. Please try again.', success: false },
        });
      }
    });
  }
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
  }
}
