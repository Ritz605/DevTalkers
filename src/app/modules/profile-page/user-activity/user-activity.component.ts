import { Component } from '@angular/core';
import { TagBadgeComponent } from '../../../components/molecules/tag-badge/tag-badge.component';

@Component({
  selector: 'app-user-activity',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './user-activity.component.html',
  styleUrl: './user-activity.component.css'
})
export class UserActivityComponent {

}
