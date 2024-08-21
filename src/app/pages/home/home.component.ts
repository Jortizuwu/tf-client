import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/atoms/button/button.component';
import { LabelComponent } from '../../shared/components/atoms/label/label.component';
import { DividerComponent } from '../../shared/components/atoms/divider/divider.component';
import { TyperComponent } from '../../shared/components/typer/typer.component';
import { CardComponent } from '../../shared/components/atoms/card/card.component';
import { MatchService } from '../../shared/services/match.service';
import { Match } from '../../shared/models/match.model';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    LabelComponent,
    DividerComponent,
    TyperComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public matches: Match[] = [];

  constructor(
    private matchService: MatchService,
    private loaderService: LoaderService
  ) {}
  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches() {
    this.loaderService.show();
    this.matchService.ListMatch().subscribe(data => {
      this.matches = data.data;
    });
    this.loaderService.hide();
  }
}
