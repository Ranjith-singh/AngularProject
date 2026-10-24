import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { LoginService } from '../../features/login/service/login-service';

const userLogin = ()=> {
  const loginService = inject(LoginService);
  const router= inject(Router);
  const isAuthorized = loginService.isAdminLogin() || loginService.isUserLogin();

  if (!isAuthorized) {
    return router.createUrlTree(['/login']);
  }
  return isAuthorized;
}

export const appGuardGuard: CanActivateFn = (route, state) => {
  console.log(userLogin());
  return userLogin();
};

export const appCanLoad: CanMatchFn = ()=> {
  return userLogin();
}
