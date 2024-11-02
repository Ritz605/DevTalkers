import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAnswers } from '../../../redux/answers/answers.actions';
import { Answer } from '../../../redux/answers/answers.model';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from '../../../components/molecules/buttongroup/buttongroup.component';
import { SpinnerComponent } from '../../../components/molecules/spinner/spinner.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { AnswerItemComponent } from './answer-item/answer-item.component';

@Component({
  selector: 'app-answer-section',
  standalone: true,
  imports: [CommonModule, ButtonGroupComponent, AnswerItemComponent, AnswerFormComponent, SpinnerComponent],
  templateUrl: './answer-section.component.html',
  styleUrls: ['./answer-section.component.css']
})
export class AnswerSectionComponent implements OnInit {
  answers$: Observable<Answer[]>;
  loading$: Observable<boolean>;
  sortType: string = 'Newest';

  constructor(private store: Store<{ answers: Answer[], loading: boolean }>) {
    this.answers$ = store.select('answers');
    this.loading$ = store.select('loading');
  }

  ngOnInit(): void {
    this.store.dispatch(getAnswers() as any);
  }

  setSortType(type: string): void {
    this.sortType = type;
  }
}