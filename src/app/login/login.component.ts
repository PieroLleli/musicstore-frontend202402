import { Component, inject } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SimpleHeaderComponent } from '../shared/components/simple-header/simple-header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../shared/services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  imports: [
    SimpleHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FooterComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  notifications = inject(NotificationsService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  login() {
    const email = this.loginForm.controls.email.value!;
    const password = this.loginForm.controls.password.value!;

    this.authService.login(email, password).subscribe((response) => {
      localStorage.setItem('token', response.data.token);

      this.authService.verifyToken();

      this.notifications.success(
        'Login exitoso',
        'Bienvenido a Musical Events'
      );

      const nextRoute =
        this.authService.role() === 'Administrator' ? '/admin' : '/customer';
      this.router.navigate([nextRoute]);
    });
  }
}
