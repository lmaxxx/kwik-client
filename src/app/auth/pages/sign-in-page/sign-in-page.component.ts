import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SignUpFormComponent} from "../../components/sign-up-form/sign-up-form.component";
import {SignInFormComponent} from "../../components/sign-in-form/sign-in-form.component";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SignUpFormComponent,
    SignInFormComponent
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {

}
