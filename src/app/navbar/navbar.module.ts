import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Solo necesitas RouterModule, no RouterLink
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // Esto ya incluye las directivas como RouterLink
    NavbarComponent,
    AppRoutingModule
  ],
  exports: [NavbarComponent]  // Exportas NavbarComponent para usarlo en otros módulos
})
export class NavbarModule { }
