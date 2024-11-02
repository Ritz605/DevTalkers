import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import moment from 'moment';
import { User } from '../../../redux/users/users.model';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {
  @Input() user!: User;

  getFormattedDate(date: string): string {
    return moment(date).fromNow(false);
  }
}