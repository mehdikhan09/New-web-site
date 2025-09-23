import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Awards } from '../awards/awards';

declare var PureCounter: any;

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule, Awards ],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }
}