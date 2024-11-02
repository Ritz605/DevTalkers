import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, register } from '../../../redux/auth/auth.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Input() action: string = 'Log in';
  formData = {
    username: '',
    password: ''
  };

  constructor(private store: Store, private router: Router) {}

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.formData = { ...this.formData, [target.name]: target.value };
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.action === 'Sign up') {
      this.store.dispatch(register(this.formData) as any);
    } else {
      this.store.dispatch(login(this.formData) as any);
    }
  }
}