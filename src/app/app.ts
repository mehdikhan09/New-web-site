import { CommonModule } from '@angular/common';
import { Component, signal, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

// Update this import to match the actual export from navbar.ts, for example:
import { Navbar } from "../Components/navbar/navbar";
// Or, if the file exports a default component:
import { Footer } from "../Components/footer/footer";
import {Recoreviews } from '../Components/recoreviews/recoreviews';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from "../Components/home/home";
import { AboutUsComponent } from '../Components/about-us/about-us';
import { Serv } from '../Components/serv/serv';
import { Price } from '../Components/price/price';
import { ContactUs } from '../Components/contact-us/contact-us';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Recoreviews,
    Footer,
    Navbar,
    TranslateModule,
    MatCardModule,
    MatGridListModule,
    Recoreviews, 
    AboutUsComponent,
    HomeComponent,
    Serv,
    Price,
    ContactUs,
    RouterModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  ngOnInit() {
    this.showAdBox = true; // Ensure ad box is visible on page load
    console.log('showAdBox:', this.showAdBox);
  }
  public showAdBox: boolean = true;

  hideAdBox() {
    this.showAdBox = false;
  }
  protected readonly title = signal('Noj_App');

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
    // Ensure video is muted for autoplay
    const video: HTMLVideoElement | null = document.querySelector('#ad-video-box video');
    if (video) {
      video.muted = true;
    }
  }
}