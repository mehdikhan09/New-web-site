import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-moving-cleaning',
  imports: [RouterModule, TranslateModule, MatExpansionModule ],
  templateUrl: './moving-cleaning.html',
  styleUrls: ['./moving-cleaning.css']
})
export class MovingCleaning {

}
