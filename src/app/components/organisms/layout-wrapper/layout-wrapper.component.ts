import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [SideBarComponent, RightSideBarComponent, FooterComponent],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.css'
})
export class LayoutWrapperComponent {

}
