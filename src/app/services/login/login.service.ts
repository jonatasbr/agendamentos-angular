import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(email: string, password: string){
    console.log('login service')

    return this.httpClient.post<LoginResponse>(environment.apiUrl + "/auth/sign-in", { email, password }).pipe(
      tap((value) => {
        localStorage.setItem("access_token", value.access_token)
        localStorage.setItem("name", value.name)
        this.router.navigate(['/usuarios']);
      })
    )
  }
}
