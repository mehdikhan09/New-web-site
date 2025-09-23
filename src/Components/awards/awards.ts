import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Serv } from '../serv/serv';

@Component({
  selector: 'app-awards',
  imports: [TranslateModule, Serv ],
  templateUrl: './awards.html',
  styleUrl: './awards.css'
})
export class Awards {

}
