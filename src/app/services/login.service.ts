import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:3333"

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    console.log('login service')

    return this.httpClient.post<LoginResponse>(this.apiUrl + "/auth/sign-in", { email, password }).pipe(
      tap((value) => {
        localStorage.setItem("access_token", value.access_token)
        localStorage.setItem("name", value.name)
      })
    )
  }
}
