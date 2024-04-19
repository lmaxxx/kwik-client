import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {SignInDto} from "../../auth/types/sign-in-dto.type";
import {User} from "../../shared/types";
import {SignUpDto} from "../../auth/types/sign-up-dto.type";

export const AuthActions = createActionGroup({
  source: "Auth",
  events: {
    "signIn": props<SignInDto>(),
    "signInSuccess": props<{ user: User }>(),
    "authError": props<{ errorResponse: any }>(),
    "signUp": props<SignUpDto>(),
    "signUpSuccess": props<{ user: User }>(),
    'logout': props<{ email: string; password: string }>(),
    'refresh': props<{ email: string; password: string }>(),
  }
})

export const UserActions = createActionGroup({
  source: "User",
  events: {
    "toggleTheme": emptyProps()
  }
})
