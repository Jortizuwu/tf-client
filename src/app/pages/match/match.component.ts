import { Component } from '@angular/core';
import { TyperMultiplayerComponent } from '../../shared/components/multiplayer-typer/multiplayer-typer.component';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [TyperMultiplayerComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css',
})
export class MatchComponent {}
