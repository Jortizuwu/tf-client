import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
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
        path: 'settings',
        title: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            m => m.SettingsComponent
          ),
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
