import { CommonModule } from '@angular/common';
import { Component, signal, AfterViewInit, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    RouterModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
  public showAdBox: boolean = true;
  isLoginPage = false;
  isDashboardPage = false;

  // Getter to determine if header/footer should be hidden
  get shouldHideNavigation(): boolean {
    return this.isLoginPage || this.isDashboardPage;
  }

  ngOnInit() {
    this.showAdBox = true; // Ensure ad box is visible on page load
    console.log('showAdBox:', this.showAdBox);
    
    // Subscribe to router events to track current route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLoginPage = event.url === '/login';
        this.isDashboardPage = event.url === '/dashboard';
      });
  }

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

  // Keyboard shortcut to open login page
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Ctrl + L to open login page
    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      event.preventDefault(); // Prevent default browser behavior
      this.openLogin();
    }
    // Alt + L as alternative shortcut
    if (event.altKey && event.key.toLowerCase() === 'l') {
      event.preventDefault();
      this.openLogin();
    }
  }

  openLogin() {
    this.router.navigate(['/login']);
  }
}