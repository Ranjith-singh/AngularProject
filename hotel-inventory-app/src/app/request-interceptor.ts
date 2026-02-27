import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req);
  if(req.method=== 'POST'){
    const newReq= req.clone({headers: new HttpHeaders({'token': '123123123'})})
    return next(newReq)
  }
  return next(req);
};
