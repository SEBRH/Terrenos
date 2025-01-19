import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; // Ajusta la ruta si es necesario
import { PlanesComponent } from './views/planes/planes.component';
import { TerrenoComponent } from './views/terreno/terreno.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: PlanesComponent, data: { animation: 'AboutPage' } },
  { path: 'terrain', component: TerrenoComponent, data: { animation: 'TerrainPage' } }
  ];