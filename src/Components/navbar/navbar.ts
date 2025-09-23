import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatIconModule,
    TranslateModule,
  RouterModule,

  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|sv/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
