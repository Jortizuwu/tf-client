import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemesService } from './shared/services/themes.service';
import { LoaderService } from './shared/services/loader.service';
import { LoaderComponent } from './shared/components/atoms/loader/loader.component';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tf-client';
  isLoading$: Observable<boolean>;
  private loaderSubscription?: Subscription;

  constructor(
    private themeService: ThemesService,
    private loaderService: LoaderService
  ) {
    this.isLoading$ = this.loaderService.loading$;
  }

  ngOnInit(): void {
    this.themeService.setTheme('dark_note');
  }

  ngOnDestroy(): void {
    if (this.loaderSubscription) {
      this.loaderSubscription.unsubscribe();
    }
  }
}
