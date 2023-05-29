import {Routes} from '@angular/router';

export const routes: Routes = [
    {
      path: '', redirectTo: 'quotes', pathMatch: 'full'
    },
    {
      path: 'quotes',
      loadComponent: () => import('./pages/quotes-page/quotes-page.component')
        .then(c => c.QuotesPageComponent)

    },
    {
      path: 'admin',
      loadComponent: () => import('./pages/admin-page/admin-page.component')
        .then(c => c.AdminPageComponent)
    },
    {
      path: 'auth',
      loadComponent: () => import('./pages/auth-pages/auth/auth.component')
        .then(c => c.AuthComponent),
      children: [
        {
          path: '', redirectTo: 'login', pathMatch: 'full'
        },
        {
          path: '**', redirectTo: 'login'
        },
        {
          path: 'login',
          loadComponent: () => import('./pages/auth-pages/login/login.component')
            .then(c => c.LoginComponent)
        },
        {
          path: 'sign-in',
          loadComponent: () => import('./pages/auth-pages/sign-in/sign-in.component')
            .then(c => c.SignInComponent)
        },
        {
          path: 'logout',
          loadComponent: () => import('./pages/auth-pages/logout/log-out.component')
            .then(c => c.LogOutComponent)
        },
      ]
    }
  ]
;
