import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Hover } from './hover/hover';
import { EmailValidator } from './emailValidator/email-validator';
import { CommonModule } from '@angular/common';
import { LoginService } from './service/login-service';

@Component({
  selector: 'hcare-login',
  imports: [FormsModule, Hover, EmailValidator, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string= '';
  password: string= '';

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  login(loginForm: NgForm) {
    if (this.loginService.adminLogin(this.email, this.password) ||
    this.loginService.userLogin(this.email, this.password)) {
      this.router.navigate(['/rooms']);
    }
    else {
      loginForm.reset();
      alert("Invalid username or password");
    }
  }
}
