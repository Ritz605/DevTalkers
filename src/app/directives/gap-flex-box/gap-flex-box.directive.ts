import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGapFlexBox]'
})
export class GapFlexBoxDirective {
  @HostBinding('style.display') display = 'flex';
  @Input() gap: string = '0';

  @HostBinding('style.gap') get styleGap() {
    return this.gap;
  }
}