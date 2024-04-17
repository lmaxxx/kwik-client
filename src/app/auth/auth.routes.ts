import {Route} from "@angular/router";

export const AUTH_ROUTES: Route[] = [
  {
    path: 'sign-in',
    loadComponent: () => import("./pages/sign-in-page/sign-in-page.component").then(m => m.SignInPageComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import("./pages/sign-up-page/sign-up-page.component").then(m => m.SignUpPageComponent)
  }
]
