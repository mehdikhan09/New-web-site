import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  hidePassword: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    // Simple validation
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      this.isLoading = false;
      return;
    }

    // Simulate login process
    setTimeout(() => {
      // Replace this with your actual login logic
      if (this.username === 'admin' && this.password === 'password') {
        console.log('Login successful');
        // Navigate to dashboard or home page
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
      this.isLoading = false;
    }, 1000);
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}