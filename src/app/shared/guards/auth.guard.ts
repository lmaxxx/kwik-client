import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectIsLoggedIn} from "../../store/user";
import {tap} from "rxjs";

export const authGuard: CanActivateFn = () => {
  const store = inject(Store)
  const router = inject(Router)

  return store.select(selectIsLoggedIn).pipe(
    tap(isLoggedIn => {
      if(!isLoggedIn) router.navigateByUrl("/auth/sing-in")
    })
  )
};
