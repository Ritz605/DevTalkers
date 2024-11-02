import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteAnswer } from '../../../../redux/answers/answers.actions';
import { UserCardComponent } from '../../../../components/molecules/user-card/user-card.component';

@Component({
  selector: 'app-answer-item',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent {
  @Input() answer: any;

  constructor(private store: Store) {}

  onDeleteAnswer(answerId: string): void {
    this.store.dispatch(deleteAnswer(answerId) as any);
  }

  onUpVote(): void {
    
  }

  onDownVote(): void {
    
  }
}