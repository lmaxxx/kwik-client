import {createReducer, on} from "@ngrx/store";
import {UserStateType} from "./types/user-state.type";
import {AuthActions} from "./user.actions";

export const initialState: UserStateType = {
  user: null,
  isLoggedIn: false,
}

export const userReducer = createReducer(
  initialState,
  on(AuthActions.signInSuccess, (state, {user}) => {
    return {...state, user, isLoggedIn: true}
  }),
  on(AuthActions.signUpSuccess, (state, {user}) => {
    return {...state, user, isLoggedIn: true}
  }),
)
