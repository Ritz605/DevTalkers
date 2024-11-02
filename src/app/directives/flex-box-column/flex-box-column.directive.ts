import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFlexBoxColumn]'
})
export class FlexBoxColumnDirective {
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') flexDirection = 'column';
}