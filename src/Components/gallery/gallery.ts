import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, TranslateModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedCategory: string = 'all';
  images = [
  // { src: 'assets/img/Gallery/R1.png', alt: 'Room 1', category: 'room', size: '320px' },
  // { src: 'assets/img/Gallery/K1.png', alt: 'Kitchen', category: 'kitchen', size: '320px' },
  // { src: 'assets/img/Gallery/B1.png', alt: 'Bathroom', category: 'bathroom', size: '320px' },
  // { src: 'assets/img/Gallery/W1.jpeg', alt: 'Window', category: 'window', size: '220px' },

  // { src: 'assets/img/1758210155039.jpeg', alt: 'Bathroom 2', category: 'bathroom', size: '320px' },
  // { src: 'assets/img/1758209644689.jpeg', alt: 'Room 2', category: 'room', size: '220px' },
  // { src: 'assets/img/53282543286.jpg', alt: 'Window 2', category: 'window', size: '220px' },
  // { src: 'assets/img/k5.png', alt: 'Kitchen 2', category: 'kitchen', size: '320px' },

  { src: 'assets/img/Gallery/A1.png', alt: 'A1', category: '', size: '300px'},
  { src: 'assets/img/Gallery/A2.png', alt: 'A2', category: '' },

  { src: 'assets/img/Gallery/R1.jpg', alt: 'B1', category: 'room' },
  { src: 'assets/img/Gallery/B1.jpg', alt: 'B2', category: 'bathroom' },
  { src: 'assets/img/Gallery/K1.jpg', alt: 'B3', category: 'kitchen' },
  { src: 'assets/img/Gallery/W1.png', alt: 'B4', category: 'window' },

  { src: 'assets/img/Gallery/R2.jpg', alt: 'B5', category: 'room' },
  { src: 'assets/img/Gallery/B2.jpg', alt: 'B6', category: 'bathroom' },
  { src: 'assets/img/Gallery/K2.jpg', alt: 'B7', category: 'kitchen' },
  { src: 'assets/img/Gallery/W2.jpg', alt: 'B8', category: 'window' },

  { src: 'assets/img/Gallery/R3.jpg', alt: 'B9', category: 'room' },
  { src: 'assets/img/Gallery/B3.jpg', alt: 'B10', category: 'bathroom' },
  { src: 'assets/img/Gallery/K3.jpg', alt: 'B11', category: 'bathroom' },
  //{ src: 'assets/img/Gallery/W3.jpg', alt: 'B12', category: 'window' },

  { src: 'assets/img/Gallery/R4.jpg', alt: 'B13', category: 'room' },
  { src: 'assets/img/Gallery/B4.jpg', alt: 'B14', category: 'bathroom' },
  { src: 'assets/img/Gallery/K4.jpg', alt: 'B15', category: 'kitchen' },
  //{ src: 'assets/img/Gallery/W4.jpg', alt: 'B16', category: 'window' },

  { src: 'assets/img/Gallery/R5.jpg', alt: 'B17', category: 'room' },
  { src: 'assets/img/Gallery/B5.jpg', alt: 'B18', category: 'bathroom' },
  //{ src: 'assets/img/Gallery/K5.jpg', alt: 'B19', category: 'kitchen' },
  //{ src: 'assets/img/Gallery/W5.jpg', alt: 'B20', category: 'window' },

  { src: 'assets/img/Gallery/R6.jpg', alt: 'B21', category: 'room' },
  //{ src: 'assets/img/Gallery/B6.jpg', alt: 'B22', category: 'bathroom' },
  //{ src: 'assets/img/Gallery/K6.jpg', alt: 'B23', category: 'kitchen' },
  //{ src: 'assets/img/Gallery/W6.jpg', alt: 'B24', category: 'window' },

  { src: 'assets/img/Gallery/R7.png', alt: 'B25', category: 'room' },
  //{ src: 'assets/img/Gallery/B7.jpg', alt: 'B26', category: 'bathroom' },
  //{ src: 'assets/img/Gallery/K7.jpg', alt: 'B27', category: 'kitchen' },
  //{ src: 'assets/img/Gallery/W7.jpg', alt: 'B28', category: 'window' },

    // Add more images as needed
  ];
  modalImage: any = null;

  openModal(img: any) {
    this.modalImage = img;
  }

  closeModal() {
    this.modalImage = null;
  }
}
