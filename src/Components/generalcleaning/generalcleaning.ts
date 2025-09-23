import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-generalcleaning',
  imports: [RouterModule, TranslateModule, MatExpansionModule ],
  templateUrl: './generalcleaning.html',
  styleUrls: ['./generalcleaning.css']
})
export class Generalcleaning {
  isPanelExpanded = true;

  constructor() {
    if (window.innerWidth <= 700) {
      this.isPanelExpanded = false;
    }
  }
}
