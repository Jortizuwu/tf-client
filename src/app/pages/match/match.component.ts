import { Component } from '@angular/core';
import { TyperComponent } from "../../shared/components/typer/typer.component";

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [TyperComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {

}
