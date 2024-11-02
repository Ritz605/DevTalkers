import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basebutton.component.html',
  styleUrls: ['./basebutton.component.scss']
})
export class BaseButtonComponent {
  @Input() text: string = '';
  @Input() selected: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}