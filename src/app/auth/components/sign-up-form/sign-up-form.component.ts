import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {AsyncPipe} from "@angular/common";
import {ThemeService} from "../../../shared/services/theme.service";
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthActions} from "../../../store/user";
import {SignUpDto} from "../../types/sign-up-dto.type";

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    AsyncPipe,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl('', [Validators.required]),
  })

  constructor(
    private store: Store
  ) {
  }

  submit() {
    this.store.dispatch(AuthActions.signUp(this.form.value as NonNullable<SignUpDto>))
  }
}
