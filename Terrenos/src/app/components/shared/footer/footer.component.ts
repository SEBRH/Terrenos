import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-footer',
  imports: [MatButtonModule,MatRippleModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
