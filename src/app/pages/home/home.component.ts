import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { LabelComponent } from '../../shared/components/ui/label/label.component';
import { DividerComponent } from '../../shared/components/ui/divider/divider.component';
import { TyperMultiplayerComponent } from '../../shared/components/multiplayer-typer/multiplayer-typer.component';
import { CardComponent } from '../../shared/components/ui/card/card.component';
import { MatchService } from '../../shared/services/match.service';
import { Match } from '../../shared/models/match.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelComponent,
    DividerComponent,
    TyperMultiplayerComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public matches: Match[] = [];

  constructor(private matchService: MatchService) {}
  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.ListMatch().subscribe(data => {
      this.matches = data.data;
    });
  }
}
