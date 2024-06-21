import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EsqueciSenhaService } from '../../services/esqueci-senha.service';

interface EsqueciSenhaForm {
  email: FormControl,
}

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    EsqueciSenhaService
  ],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.scss'
})
export class EsqueciSenhaComponent {
  esqueciSenhaForm!: FormGroup<EsqueciSenhaForm>;

  constructor(
    private router: Router,
    private esqueciSenhaService: EsqueciSenhaService,
    private toastService: ToastrService
  ){
    this.esqueciSenhaForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  submit(){
    this.esqueciSenhaService.execute(this.esqueciSenhaForm.value.email,).subscribe({
      next: () => this.toastService.success("E-mail enviado com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente.")
    })
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
