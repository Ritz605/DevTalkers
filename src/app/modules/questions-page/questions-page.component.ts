import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from '../../redux/posts/posts.actions';
import { Post } from '../../redux/posts/posts.model';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';
import { LinkButtonComponent } from '../../components/molecules/linkbutton/linkbutton.component';
import { SearchBoxComponent } from '../../components/molecules/searchbox/searchbox.component';
import { ButtonGroupComponent } from '../../components/molecules/buttongroup/buttongroup.component';
import { PostItemComponent } from '../../components/molecules/postitem/postitem.component';
import { PaginationComponent } from '../../components/organisms/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { PaginatePipe } from '../../pipes/paginate.pipe';

@Component({
  selector: 'app-questions-page',
  standalone: true,
  imports: [SpinnerComponent, LinkButtonComponent, SearchBoxComponent, ButtonGroupComponent, PostItemComponent, PaginationComponent, CommonModule, FilterPipe, SortPipe, PaginatePipe],
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;
  page: number = 1;
  sortType: string = 'Newest';
  searchQuery!: string;

  constructor(private route: ActivatedRoute, private store: Store<{ post: { posts: Post[], loading: boolean } }>) {
    this.posts$ = this.store.select(state => state.post.posts);
    this.loading$ = this.store.select(state => state.post.loading);
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts() as any);
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
    });
  }

  handlePaginationChange(value: any): void {
    this.page = value;
  }

  setSortType(type: string): void {
    this.sortType = type;
  }
}