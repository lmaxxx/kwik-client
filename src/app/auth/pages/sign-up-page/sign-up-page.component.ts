import { Component } from '@angular/core';
import {SignUpFormComponent} from "../../components/sign-up-form/sign-up-form.component";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    SignUpFormComponent,
    NgOptimizedImage,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

}
