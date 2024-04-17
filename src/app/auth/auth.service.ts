import { Injectable } from '@angular/core';
import {SignInDto} from "./types/sign-in-dto.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {User} from "../shared/types";
import {SignUpDto} from "./types/sign-up-dto.type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  signIn(signInDto: SignInDto) {
    return this.http.post<User>(`${environment.apiUrl}/auth/sign-in`, signInDto)
  }

  signUp(signUpDto: SignUpDto) {
    return this.http.post<User>(`${environment.apiUrl}/auth/sign-up`, signUpDto)
  }

}
