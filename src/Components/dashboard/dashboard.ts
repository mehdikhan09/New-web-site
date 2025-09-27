import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface RecentActivity {
  id: number;
  title: string;
  time: Date;
  type: 'booking' | 'message' | 'service';
  icon: string;
}

interface RecentBooking {
  id: number;
  customerName: string;
  service: string;
  date: Date;
  time?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'New_booking';
}

interface CalendarDay {
  date: Date;
  currentMonth: boolean;
  bookings: RecentBooking[];
}

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressBarModule,
    CommonModule,
    NgIf,
    NgFor,
    TranslateModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {
  // Tab management
  activeTab: string = 'overview';
  
  // Current date for display
  currentDate: Date = new Date();
  
  // Statistics
  totalBookings: number = 0;
  totalMessages: number = 0;
  activeServices: number = 0;
  revenue: number = 0;
  
  // Data arrays
  recentActivities: RecentActivity[] = [];
  recentBookings: RecentBooking[] = [];

  // Calendar functionality
  currentMonth: Date = new Date();
  calendarDays: CalendarDay[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Load dashboard data
    this.loadDashboardData();
    
    // Initialize calendar
    this.generateCalendar();
    
    // Add full-screen class to body for dashboard
    document.body.classList.add('dashboard-mode');
  }

  ngOnDestroy() {
    // Remove full-screen class when leaving dashboard
    document.body.classList.remove('dashboard-mode');
  }

  private loadDashboardData() {
    // Simulate loading dashboard data
    // In a real application, you would fetch this from your API
    setTimeout(() => {
      this.totalBookings = 45;
      this.totalMessages = 12;
      this.activeServices = 8;
      this.revenue = 125000;
      
      this.recentActivities = [
        {
          id: 1,
          title: 'New booking received from John Doe',
          time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          type: 'booking',
          icon: 'calendar_today'
        },
        {
          id: 2,
          title: 'Contact message from Sarah Johnson',
          time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
          type: 'message',
          icon: 'message'
        },
        {
          id: 3,
          title: 'Home cleaning service completed',
          time: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
          type: 'service',
          icon: 'cleaning_services'
        }
      ];

      this.recentBookings = [
        {
          id: 1,
          customerName: 'Anna Andersson',
          service: 'Home Cleaning',
          date: new Date(Date.now() + 24 * 60 * 60 * 1000), // tomorrow
          time: '09:00',
          status: 'New_booking'
        },
        {
          id: 2,
          customerName: 'Erik Johansson',
          service: 'Window Cleaning',
          date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // day after tomorrow
          time: '14:30',
          status: 'New_booking'
        },
        {
          id: 3,
          customerName: 'Maria Nilsson',
          service: 'Office Cleaning',
          date: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
          time: '10:00',
          status: 'New_booking'
        },
        {
          id: 4,
          customerName: 'Lars Svensson',
          service: 'Moving Cleaning',
          date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          time: '08:30',
          status: 'New_booking'
        },
        {
          id: 5,
          customerName: 'Sofia Karlsson',
          service: 'General Cleaning',
          date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          time: '11:15',
          status: 'New_booking'
        },
        {
          id: 6,
          customerName: 'Johan Lindberg',
          service: 'Construction Cleaning',
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          time: '13:00',
          status: 'New_booking'
        }
      ];
    }, 1000);
  }

  // Get icon for different services
  getServiceIcon(service: string): string {
    const iconMap: { [key: string]: string } = {
      'Home Cleaning': 'home',
      'Office Cleaning': 'business',
      'Window Cleaning': 'window',
      'Moving Cleaning': 'local_shipping',
      'General Cleaning': 'cleaning_services',
      'Construction Cleaning': 'construction'
    };
    return iconMap[service] || 'cleaning_services';
  }

  // Get current page title based on active tab
  getPageTitle(): string {
    switch (this.activeTab) {
      case 'overview':
        return 'Dashboard Overview';
      case 'bookings':
        return 'All Bookings';
      case 'customers':
        return 'Customer Management';
      case 'analytics':
        return 'Analytics & Reports';
      default:
        return 'Dashboard';
    }
  }

  // Navigation methods
  createNewBooking() {
    this.router.navigate(['/booking']);
  }

  openSettings() {
    // Future settings page
    alert('Settings functionality coming soon!');
  }

  // Calendar methods
  generateCalendar() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    
    // Get first day of the month and calculate calendar start
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Calculate start of calendar (Monday of the first week)
    const startDate = new Date(firstDay);
    const dayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
    startDate.setDate(firstDay.getDate() - dayOfWeek);
    
    // Generate 42 days (6 weeks)
    this.calendarDays = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const calendarDay: CalendarDay = {
        date: date,
        currentMonth: date.getMonth() === month,
        bookings: this.getBookingsForDate(date)
      };
      
      this.calendarDays.push(calendarDay);
    }
  }

  getBookingsForDate(date: Date): RecentBooking[] {
    return this.recentBookings.filter(booking => {
      const bookingDate = new Date(booking.date);
      return bookingDate.toDateString() === date.toDateString();
    });
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  logout() {
    // Clear any authentication data
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('currentUser');
    
    // Navigate back to login
    this.router.navigate(['/login']);
  }

  viewBookings() {
    // Navigate to bookings management page
    this.router.navigate(['/booking']);
  }

  viewMessages() {
    // Navigate to messages page
    this.router.navigate(['/contact']);
  }

  manageServices() {
    // Navigate to services management page
    this.router.navigate(['/services']);
  }

  generateReports() {
    // Navigate to reports page or open reports modal
    console.log('Generate reports functionality');
    alert('Reports functionality will be implemented soon!');
  }
}