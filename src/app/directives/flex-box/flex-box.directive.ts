import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFlexBox]'
})
export class FlexBoxDirective {
  @HostBinding('style.display') display = 'flex';
}