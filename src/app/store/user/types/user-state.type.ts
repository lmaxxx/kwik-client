import {User} from "../../../shared/types";

export interface UserStateType{
  user: User | null
  isLoggedIn: boolean
}
