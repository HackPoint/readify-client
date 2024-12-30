import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@readifyai/features/dashboard').then((m) => m.dashboardRoutes),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
