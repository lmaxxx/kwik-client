import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {AuthActions} from "../../../store/user/user.actions";
import {Store} from "@ngrx/store";
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from "@angular/router";
import {SignInDto} from "../../types/sign-in-dto.type";

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private store: Store
  ) {
  }

  submit() {
    this.store.dispatch(AuthActions.signIn(this.form.value as NonNullable<SignInDto>))
  }
}
