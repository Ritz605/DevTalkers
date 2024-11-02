import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from '../basebutton/basebutton.component';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.scss']
})
export class ButtonGroupComponent {
  @Input() buttons: string[] = [];
  @Input() selected: string = '';
  @Output() setSelected = new EventEmitter<string>();

  handleButtonClick(button: string) {
    this.setSelected.emit(button);
  }
}