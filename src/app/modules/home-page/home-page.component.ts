import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUsers } from '../../redux/users/users.actions';
import { User } from '../../redux/users/users.model';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';
import { UserPanelComponent } from '../all-users-page/user-panel/user-panel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, UserPanelComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ users: User[], loading: boolean }>) {
    this.users$ = store.select('users');
    this.loading$ = store.select('loading');
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers() as any);
  }
}