import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appForceFont]',
  standalone: true
})
export class ForceFontDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const target = this.el.nativeElement.tagName === 'BUTTON'
      ? this.el.nativeElement.querySelector('.mdc-list-item__primary-text') || this.el.nativeElement
      : this.el.nativeElement;

    this.renderer.setStyle(target, 'font-family', `'MTN Brighter Sans', sans-serif`);
    this.renderer.setStyle(target, 'font-size', '1.2rem');
    this.renderer.setStyle(target, 'font-weight', 'bold');
  }
}