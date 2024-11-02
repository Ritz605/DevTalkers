import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGapFlexBoxColumn]'
})
export class GapFlexBoxColumnDirective {
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') flexDirection = 'column';
  @Input() gap: string = '0';

  @HostBinding('style.gap') get styleGap() {
    return this.gap;
  }
}