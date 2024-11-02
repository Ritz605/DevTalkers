import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './linkbutton.component.html',
  styleUrls: ['./linkbutton.component.scss']
})
export class LinkButtonComponent {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() type: string = '';
  @Input() marginTop: string = '0';
  @Output() handleClick = new EventEmitter<void>();

  onClick() {
    this.handleClick.emit();
  }
}