import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Parral Page';

  constructor(private readonly router: Router) {}

  navigateToSeguridad() {
    this.router.navigate(['/seguridad']);
  }

  navigateToRefrigeracion() {
    this.router.navigate(['/refrigeracion']);
  }

  navigateToHardware() {
    this.router.navigate(['/hardware']);
  }

  navigateToDesign() {
    this.router.navigate(['/diseño']);
  }

  navigateToCostos() {
    this.router.navigate(['/costos']);
  }
}
