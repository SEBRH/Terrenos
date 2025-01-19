import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/shared/toolbar/toolbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { routeTransition } from '../route-transition';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [routeTransition]
})
export class AppComponent {
  title = 'Terrenos';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
