import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layout/layout.component').then(
        m => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        title: 'Change Detection',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'practice',
        title: 'practice',
        loadComponent: () =>
          import('./pages/practice/practice.component').then(
            m => m.PracticeComponent
          ),
      },
      {
        path: 'match/:id',
        title: 'match',
        loadComponent: () =>
          import('./pages/match/match.component').then(m => m.MatchComponent),
      },
      {
        path: 'settings',
        title: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            m => m.SettingsComponent
          ),
      },
      {
        path: 'auth',
        title: 'auth',
        loadComponent: () =>
          import('./pages/auth/auth.component').then(m => m.AuthComponent),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
