import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() createdAt: string = '';
  @Input() userId: string = '';
  @Input() gravatar: string = '';
  @Input() username: string = '';
  @Input() dateType: string = 'asked';
  @Input() float: string = 'none';
  @Input() backgroundColor: string = '#3e4a52';

  getFormattedDate() {
    return moment(this.createdAt).fromNow(true);
  }
}