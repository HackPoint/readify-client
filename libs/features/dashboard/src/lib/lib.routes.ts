import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // { path: 'home', loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) },
      // { path: 'profile', loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent) },
      // { path: 'settings', loadComponent: () => import('./settings/settings.component').then((m) => m.SettingsComponent) },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
