import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from './shared/services/themes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'tf-client';

  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {
    this.themeService.setTheme('dark_note');
  }
}
