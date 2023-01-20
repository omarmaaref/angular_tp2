import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverableClickable]',
})
export class HoverableClickableDirective {
  @HostBinding('style.background') bg = '';
  @HostBinding('style.opacity') opacity = 1;
  @HostBinding('style.transform') transform = 'scale(1)';

  constructor() {}

  @HostListener('mouseover') mouseover() {
    this.bg = 'lightgrey';
  }

  @HostListener('mouseout') mouseout() {
    this.bg = '';
  }

  @HostListener('mousedown') mousedown() {
    this.opacity = 0.5;
    this.transform = 'scale(0.9)';
  }

  @HostListener('mouseup') mouseup() {
    this.transform = 'scale(1)';
    this.opacity = 1;
  }
}
