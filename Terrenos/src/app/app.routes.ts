import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Ajusta la ruta si es necesario

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la raíz a /home
    { path: 'home', component: HomeComponent }, // Ruta para el componente HomeComponent
    { path: '**', redirectTo: '/home', pathMatch: 'full' } // Manejo de rutas no válidas
  ];