import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProfile } from '../../redux/users/users.actions';
import { SpinnerComponent } from '../../components/molecules/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { ExternalUserDetailsComponent } from './external-user-details/external-user-details.component';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { UserSectionComponent } from './user-section/user-section.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [SpinnerComponent, CommonModule, ExternalUserDetailsComponent, UserActivityComponent, UserSectionComponent],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<{ user: any }>) {
    this.user$ = this.store.select(state => state.user.user);
    this.loading$ = this.store.select(state => state.user.loading);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getProfile(id) as any);
  }
}