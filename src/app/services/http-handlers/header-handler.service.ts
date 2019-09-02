import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HeaderHandlerService implements HttpInterceptor {
  constructor(private _auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._auth.authUser ? this._auth.authUser.token : this._auth.token;
    if (token) {
      return next.handle(this.cloneRequest(request, token));
    } else {
      return next.handle(request);
    }
  }

  cloneRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      headers: new HttpHeaders({
        'Authorization': token
      })
    })
  }
}