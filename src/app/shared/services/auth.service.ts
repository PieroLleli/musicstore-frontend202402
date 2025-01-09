import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import {
  LoginApiResponse,
  RegisterRequestBody,
  ResetPasswordApiResponse,
  ResetPasswordRequestBody,
} from '../models/auth.model';
import { catchError, EMPTY } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  email = signal('');
  name = signal('');
  role = signal('');
  isLoggedIn = signal(false);
  notifications = inject(NotificationsService);
  router = inject(Router);

  login(email: string, password: string) {
    return this.http
      .post<LoginApiResponse>(this.baseUrl + '/api/users/login', {
        username: email,
        password,
      })
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  register(body: RegisterRequestBody) {
    return this.http
      .post<LoginApiResponse>(this.baseUrl + '/api/users/register', body)
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  sendToken(email: string) {
    return this.http
      .post<LoginApiResponse>(
        this.baseUrl + '/api/users/RequestTokenToResetPassword',
        {
          email,
        }
      )
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }

  verifyToken() {
    const token = localStorage.getItem('token');
    if (!token) return;

    const jwtDecoded: any = jwtDecode(token);
    const email: string =
      jwtDecoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ];
    const name: string =
      jwtDecoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    const role: string =
      jwtDecoded[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    this.email.set(email);
    this.name.set(name);
    this.role.set(role);
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.clear();
    this.email.set('');
    this.name.set('');
    this.role.set('');
    this.isLoggedIn.set(false);
    this.notifications.success('Logout exitoso', 'Hasta luego');
    this.router.navigate(['/home']);
  }

  resetPassword(body: ResetPasswordRequestBody) {
    return this.http
      .post<ResetPasswordApiResponse>(
        this.baseUrl + '/api/users/ResetPassword',
        body
      )
      .pipe(
        catchError((error) => {
          this.notifications.error('Error', error.error.errorMessage);
          return EMPTY;
        })
      );
  }
}

function jwtDecode(token: string): any {
  throw new Error('Function not implemented.');
}
