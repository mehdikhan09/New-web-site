import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recoreviews',
  imports: [],
  templateUrl: './recoreviews.html',
  styleUrl: './recoreviews.css'
})
export class Recoreviews {
widgetUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.widgetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://widget.reco.se/v2/widget/5914132?mode=HORIZONTAL_QUOTE&inverted=false&border=true'
    );
  }
}
