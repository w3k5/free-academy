import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: ElementRef) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      console.log('click outside');
      this.clickOutside.emit(null);
    } else {
      console.log('click inisde', targetElement);
    }
  }
}
