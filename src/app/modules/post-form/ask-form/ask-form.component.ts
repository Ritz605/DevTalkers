import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-form',
  templateUrl: './ask-form.component.html',
  styleUrls: ['./ask-form.component.css']
})
export class AskFormComponent {
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