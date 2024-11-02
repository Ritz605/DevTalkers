import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTags } from '../../redux/tags/tags.actions';
import { Tag } from '../../redux/tags/tags.model';
import { PaginationComponent } from '../../components/organisms/pagination/pagination.component';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';
import { SearchBoxComponent } from '../../components/molecules/searchbox/searchbox.component';
import { ButtonGroupComponent } from '../../components/molecules/buttongroup/buttongroup.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { PaginatePipe } from '../../pipes/paginate.pipe';
import { TagPanelComponent } from './tag-panel/tag-panel.component';

@Component({
  selector: 'app-all-tags-page',
  standalone: true,
  imports: [CommonModule, PaginationComponent, TagPanelComponent, SpinnerComponent, SearchBoxComponent, ButtonGroupComponent, FilterPipe, SortPipe, PaginatePipe],
  templateUrl: './all-tags-page.component.html',
  styleUrls: ['./all-tags-page.component.scss']
})
export class AllTagsPageComponent implements OnInit {
  tags$: Observable<Tag[]>;
  loading$: Observable<boolean>;
  page: number = 1;
  fetchSearch: string = '';
  sortType: string = 'Popular';
  itemsPerPage: number = 12;

  constructor(private store: Store<{ tags: Tag[], loading: boolean }>) {
    this.tags$ = store.select('tags');
    this.loading$ = store.select('loading');
  }

  ngOnInit(): void {
    this.store.dispatch(getTags() as any);
  }

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fetchSearch = input.value;
    this.page = 1;
  }

  handlePaginationChange(page: number): void {
    this.page = page;
  }
}