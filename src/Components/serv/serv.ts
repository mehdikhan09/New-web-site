
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUs } from '../contact-us/contact-us';


@Component({
  selector: 'app-serv',
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    ContactUs
  ],
  templateUrl: './serv.html',
  styleUrl: './serv.css'
})
export class Serv {
  
}
