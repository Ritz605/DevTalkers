import { Component, Input } from '@angular/core';
import { CommentCellComponent } from './comment-cell/comment-cell.component';
import { PostCellComponent } from './post-cell/post-cell.component';
import { VoteCellComponent } from './vote-cell/vote-cell.component';

@Component({
  selector: 'app-question-section',
  standalone:true,
  imports:[CommentCellComponent, PostCellComponent, VoteCellComponent],
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.css']
})
export class QuestionSectionComponent {
  @Input() post: any;
}