import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from './contact-us.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Price } from '../price/price';

@Component({
  selector: 'app-contact-us',
  imports: [
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    FormsModule,
    Price
  ],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUs {
  public name = '';
  public email = '';
  public subject = '';
  public message = '';
  public contactMessage: string = '';
  public contactMessageType: string = '';

  constructor(
    private contactService: ContactUsService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private router: Router
  ) {}

  sendContact() {
    // Simple required check
    if (!this.name || !this.email || !this.subject || !this.message) {
      this.contactMessage = 'Please fill in all fields.';
      this.contactMessageType = 'snackbar-error';
      return;
    }
    // Simple email regex validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.contactMessage = 'Please enter a valid email address.';
      this.contactMessageType = 'snackbar-error';
      return;
    }
    const lang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    const data = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };
    this.contactService.sendContact(data, lang).subscribe({
      next: () => {
        this.contactMessage = 'Message sent successfully!';
        this.contactMessageType = 'snackbar-success';
        this.name = this.email = this.subject = this.message = '';
        setTimeout(() => {
          window.location.href = '/home';
        }, 1500);
      },
      error: () => {
        this.contactMessage = 'Failed to send message. Please try again.';
        this.contactMessageType = 'snackbar-error';
      }
    });
  }
}

