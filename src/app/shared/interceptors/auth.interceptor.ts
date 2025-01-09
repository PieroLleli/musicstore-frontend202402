import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('jwtInterceptor');

  const token = localStorage.getItem('token');
  let clonedRequest = req;
  if (token) {
    clonedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer: ${token}`),
    });
  }
  return next(clonedRequest);
};
