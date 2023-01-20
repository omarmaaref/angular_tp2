import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import getRandom from 'functions/getRandom';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  colors = ['black', 'red', 'blue', 'yellow', 'purple', 'pink', 'grey', 'cyan'];

  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') borderColor = '';

  constructor() {}
  @HostListener('keyup') keyup() {
    const selectedColor = getRandom(this.colors);
    this.borderColor = selectedColor;
    this.color = selectedColor;
  }
}
