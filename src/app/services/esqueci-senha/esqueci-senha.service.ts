import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EsqueciSenhaService {

  constructor(private httpClient: HttpClient) { }

  execute(email: string){
    return this.httpClient.post(environment.apiUrl + "/forgot", { email })
  }
}
