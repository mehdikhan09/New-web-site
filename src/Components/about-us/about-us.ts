import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-about-us',
  imports: [TranslateModule, Experience],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css']
})
export class AboutUsComponent {

}
