import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hover } from './hover/hover';
import { EmailValidator } from './emailValidator/email-validator';
import { Router } from '@angular/router';
import { LoginService } from './service/login-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Hover, EmailValidator],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string= ''
  password: string= ''

  constructor(
    private route: Router,
    private loginService: LoginService
  ){}

  // login(){
  //   // alert("SuccessFull Login...")
  //   // this.route.navigate(['/rooms', 'add-room'])
  //   this.route.navigateByUrl('/rooms/add-room')
  // }
  login(){
    if(this.loginService.login(this.email, this.password)){
      this.route.navigate(['/rooms'])
    }
    else{
      console.log("incorrect email or password, refer codebase");
    }
  }
}
