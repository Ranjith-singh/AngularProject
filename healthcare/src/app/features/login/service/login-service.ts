import { Injectable, input, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdminLogin= signal<boolean>(false);
  isUserLogin= signal<boolean>(false);

  adminLogin(email: string, password: string) {
    if((email == 'admin@gmail.com') && (password == 'admin')) {
      this.isAdminLogin.set(true);
    }
    return this.isAdminLogin();
  }

  userLogin(email: string, password: string) {
    if((email == 'user@gmail.com') && (password == 'user')) {
      this.isUserLogin.set(true);
    }
    return this.isUserLogin();
  }
}
