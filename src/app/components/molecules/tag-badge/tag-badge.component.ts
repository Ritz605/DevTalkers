import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tag-badge',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tag-badge.component.html',
  styleUrls: ['./tag-badge.component.css']
})
export class TagBadgeComponent {
  @Input() tagName: string = '';
  @Input() size: string = '';
  @Input() display: string = 'block';
  @Input() link: string = '';
  @Input() href: boolean = false;
}