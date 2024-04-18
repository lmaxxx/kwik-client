import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions} from "./user.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {Injectable} from "@angular/core";
import {MessageService} from "primeng/api";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      exhaustMap(({email, password}) =>
        this.authService.signIn({email, password})
          .pipe(
            map(user => AuthActions.signInSuccess({user})),
            catchError(errorResponse => of(AuthActions.authError({errorResponse})))
          )
      )
    )
  )

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      exhaustMap(({name, email, password}) =>
        this.authService.signUp({name, email, password})
          .pipe(
            map(user => AuthActions.signUpSuccess({user})),
            catchError(errorResponse => of(AuthActions.authError({errorResponse})))
          )
      )
    )
  )

  authError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authError),
      tap(({errorResponse}) => {
        errorResponse.error.message.forEach((errorMessage: string) =>
          this.messageService.add({severity: "error", summary: "Authorization error", detail: errorMessage})
        )
      })
    ), {dispatch: false}
  )
}
