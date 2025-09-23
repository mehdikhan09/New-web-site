import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homecleaning',
  imports: [RouterModule, TranslateModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule, MatExpansionModule],
  templateUrl: './homecleaning.html',
  styleUrl: './homecleaning.css'
})
export class Homecleaning {

}
