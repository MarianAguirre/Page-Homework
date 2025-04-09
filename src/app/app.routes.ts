import { Routes } from '@angular/router';
import { HomeComponent } from './home';

export const routes: Routes = [
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
