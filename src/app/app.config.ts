import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {userReducer} from "./store/user";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import { provideEffects } from '@ngrx/effects';
import {UserEffects} from "./store/user/user.effects";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {MessageService} from "primeng/api";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
        user: userReducer
    }),
    provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode(), // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    provideEffects(UserEffects),
    provideHttpClient(),
    provideAnimations(),
    MessageService
]
};
