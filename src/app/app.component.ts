import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from './shared/services/themes.service';
import { LoaderComponent } from './shared/components/atoms/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'tf-client';

  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {
    this.themeService.setTheme('dark_note');
  }
}
