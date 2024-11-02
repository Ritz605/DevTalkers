import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent {
  @Input() link!: string;
  @Input() icon!: string;
  @Input() text!: string;
  @Input() isHome: boolean = false;
}