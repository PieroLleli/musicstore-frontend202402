import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'forgot-password', 
        pathMatch: 'full', 
        loadComponent: () => import('./forgot-password/forgot-password.component').then(z=> z.ForgotPasswordComponent)
     },
    { 
        path: 'home',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(z=> z.HomeComponent)
        
    },
    { 
        path: 'login', 
        pathMatch: 'full', 
        loadComponent: () => import('./login/login.component').then(z=> z.LoginComponent)
    },
    { 
        path: 'register',
        pathMatch: 'full', 
        loadComponent: () => import('./register/register.component').then(z=> z.RegisterComponent)
    }
];
