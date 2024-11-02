import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getComments, deleteComment, addComment } from '../../../../redux/comments/comments.actions';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TagBadgeComponent } from '../../../../components/molecules/tag-badge/tag-badge.component';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '../../../../components/molecules/linkbutton/linkbutton.component';
import { SpinnerComponent } from '../../../../components/molecules/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-cell',
  standalone: true,
  imports: [SpinnerComponent, TagBadgeComponent, CommonModule, RouterModule, LinkButtonComponent, FormsModule],
  templateUrl: './comment-cell.component.html',
  styleUrls: ['./comment-cell.component.css']
})
export class CommentCellComponent implements OnInit {
  @Input() postId!: string;
  comments$: Observable<any>;
  formData = { body: '' };
  auth$: Observable<any>;

  constructor(private store: Store<{ comments: any, auth: any }>) {
    this.comments$ = this.store.select('comments');
    this.auth$ = this.store.select('auth');
  }

  ngOnInit(): void {
    this.store.dispatch(getComments(this.postId) as any);
  }

  handleChange(event: any): void {
    this.formData.body = event.target.value;
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.store.dispatch(addComment(this.postId, this.formData.body) as any);
    this.formData.body = '';
  }

  onDeleteComment(commentId: string): void {
    this.store.dispatch(deleteComment(commentId) as any);
  }
}