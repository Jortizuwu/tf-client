import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from './shared/services/themes.service';
import { LoaderComponent } from './shared/components/atoms/loader/loader.component';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  heroUserPlus,
  heroArrowRightEndOnRectangle,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
    NgIconComponent,
  ],
  viewProviders: [provideIcons({ heroUserPlus, heroArrowRightEndOnRectangle })],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'tf-client';

  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {
    this.themeService.setTheme('dark_note');
  }
}
