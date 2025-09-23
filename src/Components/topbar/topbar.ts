import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ForceFontDirective } from './force-font.directive';

@Component({
  selector: 'app-topbar',
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
  
  ],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.css'] 
})
export class Topbar {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sv']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|sv/) ? browserLang : 'en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}