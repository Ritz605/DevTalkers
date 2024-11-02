import { Component, Input } from '@angular/core';
import { DateFromNowPipe } from '../../../../pipes/date-from-now.pipe';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [DateFromNowPipe],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  @Input() username!: string;
  @Input() answers_count!: number;
  @Input() posts_count!: number;
  @Input() comments_count!: number;
  @Input() tags_count!: number;
  @Input() created_at!: string;
}
