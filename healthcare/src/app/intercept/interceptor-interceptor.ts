import { HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq= req.clone({
    headers: new HttpHeaders({ 'Token':'abcd'})
  });
  console.log(newReq.headers);
  return next(newReq);
};
