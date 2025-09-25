import { Component, Inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-homecleaning',
  imports: [RouterModule, TranslateModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule, MatExpansionModule, MatDialogModule, MatIconModule],
  templateUrl: './homecleaning.html',
  styleUrl: './homecleaning.css'
})
export class Homecleaning {
  
  constructor(private dialog: MatDialog) {}

  showPricingPopup() {
    const dialogRef = this.dialog.open(PricingPopupComponent, {
      width: '800px',
      maxHeight: '90vh',
      data: {
        title: 'Home Cleaning Pricing Details'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Pricing popup closed');
    });
  }
}

// Pricing Popup Component
@Component({
  selector: 'app-pricing-popup',
  template: `
  
      
      <div mat-dialog-content class="pricing-content">
        <div class="moving-cleaning-right">
          <h3 style="text-align: center;">{{ 'HomeCleaning' | translate }}</h3>
          <p style="text-align: center;">{{ 'price.movingcleaning.Text1' | translate }}</p>
          
          <mat-accordion>
            <mat-expansion-panel [expanded]="true">
              <mat-expansion-panel-header>
                <mat-panel-title>
                  {{ 'price.movingcleaning.Service37' | translate }}
                </mat-panel-title>
              </mat-expansion-panel-header>
              
              <table class="price-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <thead>
                  <tr style="background-color: #f0f0f0;">
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">{{ 'price.movingcleaning.Title' | translate }}</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: center;">{{ 'price.movingcleaning.Title1' | translate }}</th>
                    <th style="border: 1px solid #ddd; padding: 12px; text-align: right;">{{ 'price.movingcleaning.Title2' | translate }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 12px;">{{ 'price.movingcleaning.Service39' | translate }}</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">{{ 'price.movingcleaning.Service41' | translate }}</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">{{ 'price.movingcleaning.Service50' | translate }}</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 12px;">{{ 'price.movingcleaning.Service40' | translate }}</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: center;">{{ 'price.movingcleaning.Service49' | translate }}</td>
                    <td style="border: 1px solid #ddd; padding: 12px; text-align: right;">{{ 'price.movingcleaning.Service51' | translate }}</td>
                  </tr>
                </tbody>
              </table>
            </mat-expansion-panel>
          </mat-accordion>
          
          
        </div>
      </div>
      
      <div mat-dialog-actions class="dialog-actions" style="justify-content: space-between; padding: 16px 0;">
        <button mat-button mat-dialog-close>Close</button>
       
      </div>
    
  `,
  styles: [`
    .pricing-popup {
      font-family: 'Roboto', sans-serif;
    }
    
    .pricing-content {
      max-height: 70vh;
      overflow-y: auto;
      padding: 20px 0;
    }
    
    h2[mat-dialog-title] {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #2c3e50;
      margin-bottom: 20px;
    }
    
    .price-table {
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow: hidden;
    }
    
    .moving-cleaning-right h3 {
      color: #2c3e50;
      margin-bottom: 10px;
    }
    
    .contact-info {
      border-left: 4px solid #2196F3;
    }
    
    .contact-info p {
      margin: 8px 0;
    }
    
    .dialog-actions button {
      margin: 0 8px;
    }
  `],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatExpansionModule, TranslateModule]
})
export class PricingPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PricingPopupComponent>
  ) {}

  contactForQuote() {
    // Close dialog and potentially navigate to contact/booking form
    this.dialogRef.close('quote');
    // You could add navigation logic here
    // this.router.navigate(['/booking']);
  }
}
