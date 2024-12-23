import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-simple-header',
  imports: [RouterModule, RouterLink],
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.css',
})
export class SimpleHeaderComponent {}
