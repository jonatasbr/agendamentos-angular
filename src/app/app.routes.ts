import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "esqueci-senha",
    component: EsqueciSenhaComponent
  }
];
