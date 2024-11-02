import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() pt: string = '';
  @Input() px: string = '';
  @Input() width: string = '220px';
  @Output() handleSubmit = new EventEmitter<void>();
  @Output() handleChange = new EventEmitter<Event>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.handleSubmit.emit();
  }

  onChange(event: Event) {
    this.handleChange.emit(event);
  }
}