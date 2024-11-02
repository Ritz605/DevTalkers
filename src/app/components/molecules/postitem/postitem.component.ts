import { Component, Input } from '@angular/core';
import { TagBadgeComponent } from '../tag-badge/tag-badge.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { CensorBadWordsPipe } from '../../../utils/censor-bad-words.pipe';
import { InjectEllipsisPipe } from '../../../utils/inject-ellipsis.pipe';
import { HtmlSubstringPipe } from '../../../utils/html-sub-string.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [TagBadgeComponent, UserCardComponent, RouterModule, CensorBadWordsPipe, InjectEllipsisPipe, HtmlSubstringPipe, CommonModule],
  templateUrl: './postitem.component.html',
  styleUrls: ['./postitem.component.css']
})
export class PostItemComponent {
  @Input() post: any;
}