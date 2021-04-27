import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTipDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  // Properties
  @Input('appToolTip') tooltipContent: string | undefined; // uses alias

  // After view init
  ngAfterViewInit(): void {
    tippy(this.elRef.nativeElement, {
      content: this.tooltipContent,
    });
  }
}
