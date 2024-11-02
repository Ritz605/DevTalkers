import { Component } from '@angular/core';
import { SideBarWidgetComponent } from './side-bar-widget/side-bar-widget.component';
import { TagsWidgetComponent } from './tags-widget/tags-widget.component';


@Component({
  selector: 'app-right-side-bar',
  standalone: true,
  imports: [SideBarWidgetComponent, TagsWidgetComponent],
  templateUrl: './right-side-bar.component.html',
  styleUrl: './right-side-bar.component.css'
})
export class RightSideBarComponent {

}
