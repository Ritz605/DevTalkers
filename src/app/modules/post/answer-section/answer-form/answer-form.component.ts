import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addAnswer } from '../../../../redux/answers/answers.actions';
import { MarkdownEditorComponent } from '../../../../components/organisms/markdown-editor/markdown-editor.component';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../../../components/molecules/linkbutton/linkbutton.component';

@Component({
  selector: 'app-answer-form',
  standalone: true,
  imports: [CommonModule, MarkdownEditorComponent, LinkButtonComponent],
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @ViewChild(MarkdownEditorComponent) markdownEditor!: MarkdownEditorComponent;
  answerForm: FormGroup;
  isAuthenticated: boolean = false;

  constructor(private fb: FormBuilder, private store: Store<{ auth: any }>) {
    this.answerForm = this.fb.group({
      text: ['', Validators.required]
    });

    this.store.select('auth').subscribe(auth => {
      this.isAuthenticated = auth.isAuthenticated;
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.answerForm.valid) {
      this.store.dispatch(addAnswer(this.answerForm.value.text) as any);
      this.answerForm.reset();
      this.markdownEditor.cleanEditorState();
    }
  }

  updateConvertedContent(htmlConvertedContent: any): void {
    this.answerForm.patchValue({ text: htmlConvertedContent });
  }
}