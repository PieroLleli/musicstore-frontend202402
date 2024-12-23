import { Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';

@Component({
  selector: 'app-forgot-password',
  imports: [SimpleHeaderComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {}
