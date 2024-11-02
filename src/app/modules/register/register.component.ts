import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FooterComponent } from '../../components/organisms/footer/footer.component';
import { AuthFormComponent } from '../../components/organisms/auth-form/auth-form.component';
import { CaptionComponent } from './caption/caption.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CaptionComponent, AuthFormComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, private store: Store<{ auth: { isAuthenticated: boolean } }>) {
    this.isAuthenticated$ = this.store.select(state => state.auth.isAuthenticated);
  }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }
}