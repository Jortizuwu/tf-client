import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    const cloned = token
      ? req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token),
        })
      : req;

    return next.handle(cloned).pipe(
      tap((event: HttpEvent<unknown>) => {}),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Token inválido. Eliminando el token.');
          localStorage.removeItem('token');
        }
        return throwError(() => error);
      })
    );
  }
}
