import {createReducer, on} from "@ngrx/store";
import {UserStateType} from "./types/user-state.type";
import {AuthActions, UserActions} from "./user.actions";
import {Theme} from "../../shared/types";

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
  on(UserActions.toggleTheme, (state) => (
    {...state, user: {...state.user!, theme: state.user!.theme === Theme.Light ? Theme.Dark : Theme.Light}}
  ))
)
