import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-widget',
  templateUrl: './ask-widget.component.html',
  styleUrls: ['./ask-widget.component.css']
})
export class AskWidgetComponent {
  askForm: FormGroup;

  @Output() submitQuestion = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.askForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: ['']
    });
  }

  onSubmit(): void {
    if (this.askForm.valid) {
      this.submitQuestion.emit(this.askForm.value);
      this.askForm.reset();
    }
  }
}