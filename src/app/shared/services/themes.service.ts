import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private currentTheme: string = '80s_after_dark.css';

  constructor() {
    this.loadTheme(this.currentTheme);
  }

  setTheme(theme: string) {
    const linkElement = document.getElementById('theme-css') as HTMLLinkElement;
    if (linkElement) {
      linkElement.href = `assets/styles/themes/${theme}`;
      this.currentTheme = theme;
    }
  }

  private loadTheme(theme: string) {
    const linkElement = document.createElement('link');
    linkElement.id = 'theme-css';
    linkElement.rel = 'stylesheet';
    linkElement.href = `assets/styles/themes/${theme}`;
    document.head.appendChild(linkElement);
  }
}
