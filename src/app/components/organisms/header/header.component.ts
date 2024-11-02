import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../../redux/auth/auth.actions';
import { MobileSideBarComponent } from '../mobile-side-bar/mobile-side-bar.component';
import { LinkButtonComponent } from '../../molecules/linkbutton/linkbutton.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileSideBarComponent, CommonModule, LinkButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() auth: any;
  searchState: boolean = false;

  constructor(private store: Store, private router: Router) {}

  toggleSearchState() {
    this.searchState = !this.searchState;
  }

  onSearchSubmit() {
    this.router.navigate(['/questions']);
  }

  onLogout() {
    this.store.dispatch(logout() as any);
  }
}