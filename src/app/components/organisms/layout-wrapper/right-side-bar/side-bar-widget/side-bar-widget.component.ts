import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarWidgetDataService } from './side-bar-widget-data.service'; 

@Component({
  selector: 'app-side-bar-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-widget.component.html',
  styleUrls: ['./side-bar-widget.component.css']
})
export class SideBarWidgetComponent {
  sideBarWidgetData: any[] = [];

  constructor(private sideBarWidgetDataService: SideBarWidgetDataService) {
    this.sideBarWidgetData = sideBarWidgetDataService.getSideBarWidgetData();
  }
}