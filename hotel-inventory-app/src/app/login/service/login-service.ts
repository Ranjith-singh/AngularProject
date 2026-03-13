import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn= false
  isAdmin= false

  login(email: string, password: string){
    if(email=== 'admin@gmail.com' && password=== 'admin'){
      this.isLoggedIn= true;
      this.isAdmin= true;
    }
    else if(email=== 'user@gmail.com'){
      this.isLoggedIn= true;
    }
    return this.isLoggedIn;
  }
}
