import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsers } from '../../redux/users/users.actions';
import { User } from '../../redux/users/users.model';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';
import { SearchBoxComponent } from '../../components/molecules/searchbox/searchbox.component';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from '../../components/molecules/buttongroup/buttongroup.component';
import { PaginationComponent } from '../../components/organisms/pagination/pagination.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { SortPipe } from '../../pipes/sort.pipe';
import { PaginatePipe } from '../../pipes/paginate.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-all-users-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, SearchBoxComponent, ButtonGroupComponent, UserPanelComponent, PaginationComponent, FilterPipe, SortPipe, PaginatePipe],
  templateUrl: './all-users-page.component.html',
  styleUrls: ['./all-users-page.component.scss']
})
export class AllUsersPageComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  page: number = 1;
  searchQuery: string = '';
  sortType: string = 'Name';

  constructor(private store: Store<{ users: User[], loading: boolean }>) {
    this.users$ = store.select('users');
    this.loading$ = store.select('loading');
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers() as any);
  }

  handleSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.page = 1;
  }

  handlePaginationChange(page: number): void {
    this.page = page;
  }
}