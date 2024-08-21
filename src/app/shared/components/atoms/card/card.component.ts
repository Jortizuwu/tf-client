import { Component, Input } from '@angular/core';
import { Match } from '../../../models/match.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() match!: Match;
}
