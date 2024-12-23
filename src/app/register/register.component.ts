import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';

@Component({
  selector: 'app-register',
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
