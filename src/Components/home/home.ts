import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AboutUsComponent } from '../about-us/about-us';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
    standalone: true,
  imports: [CommonModule, TranslateModule,MatButtonModule,AboutUsComponent,RouterModule ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
 
}

