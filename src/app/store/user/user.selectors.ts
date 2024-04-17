import {createSelector} from "@ngrx/store";
import {UserStateType} from "./types/user-state.type";

export const selectUser = (state: any) => state.user

export const selectIsLoggedIn = createSelector(
  selectUser,
  (state: UserStateType) => state.isLoggedIn
)

export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserStateType) => state.user
)

