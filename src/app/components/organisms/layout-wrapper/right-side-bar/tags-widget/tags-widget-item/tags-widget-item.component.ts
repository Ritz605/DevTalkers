import { Component, Input } from '@angular/core';
import { TagBadgeComponent } from '../../../../../molecules/tag-badge/tag-badge.component';

@Component({
  selector: 'app-tags-widget-item',
  standalone: true,
  imports: [TagBadgeComponent],
  templateUrl: './tags-widget-item.component.html',
  styleUrls: ['./tags-widget-item.component.css']
})
export class TagsWidgetItemComponent {
  @Input() tagname!: string;
  @Input() postsCount!: number;
}