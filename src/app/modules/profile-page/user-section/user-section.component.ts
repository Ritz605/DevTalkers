import { Component, Input } from '@angular/core';
import { AvatarCardComponent } from './avatar-card/avatar-card.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-section',
  standalone: true,
  imports: [AvatarCardComponent, ContentCardComponent, CommonModule],
  templateUrl: './user-section.component.html',
  styleUrl: './user-section.component.css'
})
export class UserSectionComponent {
  @Input() user: any;
}
