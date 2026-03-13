import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './service/login-service';
import { inject } from '@angular/core';

// export const loginGuard: CanActivateFn = (route, state) => {
//   const loginService= inject(LoginService)
//   const router= inject(Router)

//   return (loginService.isLoggedIn)? true: router.navigate(['/login']);

//   // return true;
// };

export const loginGuard = () => {
  const loginService= inject(LoginService)
  const router= inject(Router)

  return (loginService.isLoggedIn)? true: router.navigate(['/login']);
};
