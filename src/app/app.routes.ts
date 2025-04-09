import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PlanComponent } from './plan';
import { ExploreComponent } from './explore';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then((m) => m.ExploreModule),
    component: ExploreComponent,
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then((m) => m.PlanModule),
    component: PlanComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
