import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.routes').then(mod => mod.AUTH_ROUTES),
  }
];
