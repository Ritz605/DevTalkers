import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPost } from '../../redux/posts/posts.actions';
import { Post } from '../../redux/posts/posts.model';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../components/molecules/linkbutton/linkbutton.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { AnswerSectionComponent } from './answer-section/answer-section.component';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, QuestionSectionComponent, AnswerSectionComponent, LinkButtonComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<{ post: Post, loading: boolean }>) {
    this.post$ = store.select('post');
    this.loading$ = store.select('loading');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getPost(id) as any);
  }
}