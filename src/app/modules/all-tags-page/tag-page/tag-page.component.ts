import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTag } from '../../../redux/tags/tags.actions';
import { getTagPosts } from '../../../redux/posts/posts.actions';
import { Tag } from '../../../redux/tags/tags.model';
import { Post } from '../../../redux/posts/posts.model';
import { LinkButtonComponent } from '../../../components/molecules/linkbutton/linkbutton.component';
import { SpinnerComponent } from '../../../components/molecules/spinner/spinner.component';
import { ButtonGroupComponent } from '../../../components/molecules/buttongroup/buttongroup.component';
import { PostItemComponent } from '../../../components/molecules/postitem/postitem.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-page',
  standalone: true,
  imports: [SpinnerComponent, LinkButtonComponent, ButtonGroupComponent, PostItemComponent, CommonModule],
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.css']
})
export class TagPageComponent implements OnInit {
  tag$: Observable<Tag>;
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;
  sortType: string = 'Newest';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ tag: Tag, posts: Post[], loading: boolean }>
  ) {
    this.tag$ = this.store.select('tag');
    this.posts$ = this.store.select('posts');
    this.loading$ = this.store.select('loading');
  }

  ngOnInit(): void {
    const tagname = this.route.snapshot.paramMap.get('tagname');
    if (tagname) {
      this.store.dispatch(getTag(tagname) as any);
      this.store.dispatch(getTagPosts(tagname) as any);
    }
  }

  handleRedirect(redirect: boolean): void {
    if (redirect) {
      this.router.navigate(['/tags']);
    }
  }

  handleSorting(sortType: string): void {
    this.sortType = sortType;
  }
}