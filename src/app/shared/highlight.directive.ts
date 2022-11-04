import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @Input()
  defaultColor: string = 'white';
  @Input('highlight')
  highlightColor: string = 'yellow';

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
