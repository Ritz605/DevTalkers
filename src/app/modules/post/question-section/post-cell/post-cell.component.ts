import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deletePost } from '../../../../redux/posts/posts.actions';
import { CommonModule } from '@angular/common';
import { TagBadgeComponent } from '../../../../components/molecules/tag-badge/tag-badge.component';
import { UserCardComponent } from '../../../../components/molecules/user-card/user-card.component';
import { CensorBadWordsPipe } from '../../../../utils/censor-bad-words.pipe';

@Component({
  selector: 'app-post-cell',
  standalone:true,
  imports:[CommonModule, TagBadgeComponent, UserCardComponent, CensorBadWordsPipe],
  templateUrl: './post-cell.component.html',
  styleUrls: ['./post-cell.component.css']
})
export class PostCellComponent {
  @Input() post: any;
  @Input() auth: any;

  constructor(private store: Store) {}

  onDeletePost(postId: string): void {
    this.store.dispatch(deletePost(postId) as any);
  }
}