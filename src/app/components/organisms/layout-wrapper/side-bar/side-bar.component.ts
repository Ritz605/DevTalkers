import { Component } from '@angular/core';
import { SideBarItemComponent } from '../side-bar/side-bar-item/side-bar-item.component';
import { CommonModule } from '@angular/common';
import { SideBarDataService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SideBarItemComponent, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  sideBarData: any[] = [];

  constructor(private sideBarDataService: SideBarDataService) {
    this.sideBarData = sideBarDataService.getSideBarData();
  }
}
