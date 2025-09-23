import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'booking-message-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dialog-content" [ngClass]="{success: data.success, error: !data.success}">
      <h2>{{ data.success ? 'Success' : 'Error' }}</h2>
      <p>{{ data.message }}</p>
      <button mat-raised-button color="primary" (click)="onOk()">OK</button>
    </div>
  `,
  styles: [`
    .dialog-content { text-align: center; padding: 32px 24px; border-radius: 16px; }
    .dialog-content.success { background: linear-gradient(90deg, #43c6ac 0%, #f8ffae 100%); color: #0d47a1; }
    .dialog-content.error { background: linear-gradient(90deg, #ffbaba 0%, #ff5252 100%); color: #a10000; }
    h2 { margin-bottom: 12px; }
    p { margin-bottom: 18px; font-size: 1.1rem; }
    button { min-width: 80px; }
  `]
})
export class BookingMessageDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BookingMessageDialog>,
    private router: Router
  ) {}

  onOk() {
    this.dialogRef.close();
    window.location.href = '/home';
  }
}