import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective {
  @HostBinding('style.box-sizing') boxSizing = 'border-box';
  @HostBinding('style.min-width') minWidth = '0';
}