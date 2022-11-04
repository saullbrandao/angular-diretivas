import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @HostListener('mouseenter')
  onMouseOver() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   ''
    // );
    this.backgroundColor = '';
  }

  constructor() {} // private renderer: Renderer2 // private elementRef: ElementRef,
}
