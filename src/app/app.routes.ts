import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "esqueci-senha",
    component: EsqueciSenhaComponent
  },
  {
      path: "usuarios",
      component: UsersComponent,
      canActivate: [AuthGuard]
  }
];
