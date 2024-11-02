import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-side-bar.component.html',
  styleUrl: './mobile-side-bar.component.css'
})
export class MobileSideBarComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}