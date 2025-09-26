import { Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../app/services/config.service';

// Create a simple dialog component for showing messages
@Component({
  selector: 'contact-message-dialog',
  template: `
    <div mat-dialog-content style="padding: 20px; text-align: center;">
      <mat-icon [style.color]="data.success ? '#4CAF50' : '#f44336'" style="font-size: 48px; margin-bottom: 16px;">
        {{ data.success ? 'check_circle' : 'error' }}
      </mat-icon>
      <p style="font-size: 16px; margin: 0;">{{ data.message }}</p>
    </div>
    <div mat-dialog-actions style="justify-content: center; padding: 16px;">
      <button mat-button mat-dialog-close color="primary">OK</button>
    </div>
  `,
  imports: [MatButtonModule, MatIconModule, CommonModule]
})
export class ContactMessageDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string; success: boolean }) {}
}

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
    ContactMessageDialog,
    MatProgressSpinnerModule
  ],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUs {
  @ViewChild('contactForm') contactForm!: NgForm;
  
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  isLoading: boolean = false;

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    // Validate configuration on component initialization (secure logging)
    if (!this.configService.isConfigValid()) {
      console.error('API configuration validation failed');
    } else {
      console.log('Configuration system initialized');
      // Only log non-sensitive security settings
      const securityConfig = this.configService.getSecurityConfig();
      console.log('Security: Encryption enabled -', securityConfig.encryptionEnabled);
    }
  }

  // Email validation helper method
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Submit form method
  submitForm() {
    // Mark all fields as touched to show validation errors
    this.markAllFieldsAsTouched();
    
    // Check if form is valid
    if (!this.isFormValid()) {
      // Don't submit if form is invalid - errors will show under fields
      return;
    }
    
    // If validation passes, proceed with API call
    this.isLoading = true;
    
    // Get current language
    const currentLanguage = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    
    // Prepare API payload
    const payload = {
      email: this.email.trim(),
      subject: this.subject.trim(),
      message: this.message.trim(),
      language: currentLanguage
    };
    
    // Set headers from encrypted configuration service
    const headers = new HttpHeaders(this.configService.getApiHeaders());
    
    // Build API URL from encrypted configuration
    const apiUrl = this.configService.getApiUrl('inquiries');
    
    // Secure logging - don't expose API URLs in console
    console.log('Sending contact form request...');
    console.log('Payload contains:', {
      email: '***@***.***',
      subject: this.subject ? 'Present' : 'Missing',
      message: this.message ? 'Present' : 'Missing',
      language: currentLanguage
    });
    console.log('Configuration status: Valid');
    
    this.http.post(apiUrl, payload, { headers }).subscribe({
      next: (response: any) => {
        console.log('Contact form submitted successfully');
        this.isLoading = false;
        
        // Show success message
        this.dialog.open(ContactMessageDialog, {
          data: { 
            message: 'Thank you for your message! We will get back to you soon.', 
            success: true 
          },
          width: '400px'
        });
        
        // Clear form after successful submission
        this.clearForm();
      },
      error: (error) => {
        console.error('Contact form submission failed');
        this.isLoading = false;
        
        // Show error message
        this.dialog.open(ContactMessageDialog, {
          data: { 
            message: 'Sorry, there was an error sending your message. Please try again later.', 
            success: false 
          },
          width: '400px'
        });
      }
    });
  }
  
  // Simple form validation without popup
  isFormValid(): boolean {
    return !!(this.name && this.name.trim() && 
             this.email && this.email.trim() && this.isValidEmail(this.email) &&
             this.subject && this.subject.trim() && 
             this.message && this.message.trim());
  }
  
  // Mark all fields as touched to show validation errors immediately
  markAllFieldsAsTouched() {
    if (this.contactForm) {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.controls[key];
        control.markAsTouched();
        control.markAsDirty();
      });
    }
  }
  
  // Clear form method
  clearForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}