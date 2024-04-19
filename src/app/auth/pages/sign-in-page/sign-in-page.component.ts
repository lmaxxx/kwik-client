import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SignUpFormComponent} from "../../components/sign-up-form/sign-up-form.component";
import {SignInFormComponent} from "../../components/sign-in-form/sign-in-form.component";
import {ButtonModule} from "primeng/button";
import {ThemeService} from "../../../shared/services/theme.service";
import {Store} from "@ngrx/store";
import {UserActions} from "../../../store/user";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SignUpFormComponent,
    SignInFormComponent,
    ButtonModule
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  constructor(
    private themeService: ThemeService,
    private store: Store
  ) {
  }

  switch() {
    this.themeService.toggle()
    this.store.dispatch(UserActions.toggleTheme());
  }
}
