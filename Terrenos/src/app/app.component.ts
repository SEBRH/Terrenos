import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ToolbarComponent } from "./components/shared/toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Terrenos';
}
