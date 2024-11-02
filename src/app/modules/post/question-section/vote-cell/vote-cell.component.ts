import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-cell',
  standalone:true,
  templateUrl: './vote-cell.component.html',
  styleUrls: ['./vote-cell.component.css']
})
export class VoteCellComponent {
  @Input() answerCount!: number;
  @Input() commentCount!: number;
  @Input() tagCount!: number;
}