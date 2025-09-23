import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-footer',
  imports: [MatCardModule, MatGridListModule, TranslateModule, ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {

}
