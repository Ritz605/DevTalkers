import { Component, Input } from '@angular/core';
import moment from 'moment';
import { TagBadgeComponent } from '../../../components/molecules/tag-badge/tag-badge.component';

@Component({
  selector: 'app-tag-panel',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './tag-panel.component.html',
  styleUrl: './tag-panel.component.css'
})
export class TagPanelComponent {
  @Input() tag!: { tagname: string, description: string, created_at: string, posts_count: number };

  getFormattedDate(date: string): string {
    return moment(date).fromNow(false);
  }
}
