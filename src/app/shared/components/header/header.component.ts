import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
