import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Options, SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleNotificationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);

  notificationsOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,
  };
  // spinner = inject(NgxSpinnerService);
  // constructor() {
  //   this.authService.verifyToken();
  // }
}
