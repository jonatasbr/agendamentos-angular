import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsqueciSenhaService {
  apiUrl: string = "http://localhost:3333"

  constructor(private httpClient: HttpClient) { }

  execute(email: string){
    return this.httpClient.post(this.apiUrl + "/forgot", { email })
  }
}
