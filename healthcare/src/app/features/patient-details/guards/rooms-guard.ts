import { CanActivateChildFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../login/service/login-service';

const adminLogin = ()=> {
  const loginService= inject(LoginService);
  return loginService.isAdminLogin();
}

export const roomsGuard: CanActivateChildFn = (childRoute, state) => {
  return adminLogin();
};
