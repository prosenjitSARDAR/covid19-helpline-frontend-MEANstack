import { AuthService } from './../modules/service/all services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)

    let tokenizedReq = req.clone({
      setHeaders: {
        authorization: `${authService.getToken()}`
      }
    })

    return next.handle(tokenizedReq)

  }

}