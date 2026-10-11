import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Hover } from './hover/hover';
import { EmailValidator } from './emailValidator/email-validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hcare-login',
  imports: [FormsModule, Hover, EmailValidator, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string= '';
  password: string= '';

  constructor(private router: Router) {}

  login() {
    console.log(this.email== 'admin@gmail.com' && this.password== 'admin')
    if(this.email== 'admin@gmail.com' && this.password== 'admin') {
      // alert("Login SucessFull");
      this.router.navigate(['/rooms']);
    }
  }
}
