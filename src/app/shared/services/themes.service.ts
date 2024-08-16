import { Injectable } from '@angular/core';
import { ThemeName } from '../models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private currentTheme: ThemeName = 'bento';

  constructor() {
    this.loadTheme(this.currentTheme);
  }

  setTheme(theme: string) {
    const linkElement = document.getElementById('theme-css') as HTMLLinkElement;
    if (linkElement) {
      linkElement.href = `assets/styles/themes/${theme}.css`;
      this.currentTheme = theme;
    }
  }

  private loadTheme(theme: string) {
    const linkElement = document.createElement('link');
    linkElement.id = 'theme-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = `assets/styles/themes/${theme}.css`;
    document.head.appendChild(linkElement);
  }
}
