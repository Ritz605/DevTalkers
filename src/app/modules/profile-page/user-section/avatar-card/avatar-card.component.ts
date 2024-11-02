import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avatar-card.component.html',
  styleUrl: './avatar-card.component.css'
})
export class AvatarCardComponent {
  @Input() id!: string;
  @Input() gravatar!: string;
  @Input() views!: number;
}
