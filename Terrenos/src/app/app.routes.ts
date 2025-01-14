import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Ajusta la ruta si es necesario

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: '**', redirectTo: '', pathMatch: 'full' } // Manejo de rutas no válidas
];