import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from '../../../app/models';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly TOKEN_KEY = 'auth-token';

  readonly AUTH_USER_KEY = 'auth-user';

  get authUser(): AuthUser { return this._authUser; }
  set authUser(user: AuthUser) {
    this._authUser = user;
  }

  private _authUser: AuthUser;

  constructor(private _http: HttpClient) {
    this.authUser = this.authLocal;
  }

  public login(body: {email: string, password: string}): Observable<AuthUser> {
    const path = `${this.basePath}`;
    return this._http.post<AuthUser>(path, body)
      .pipe(
        tap( auth => {
          this.authUser = new AuthUser(auth);
          this.authLocal = this.authUser;
          this.token = this.authUser.token;
        }
      ));
  }

  public isTokenValid(): Observable<boolean> {
    const path = `${this.basePath}/auth/check`;
    return this._http.get<boolean>(path);
  }

  private set authLocal(a: AuthUser) {
    localStorage.setItem(this.AUTH_USER_KEY, JSON.stringify(a));
  }

  private get authLocal(): AuthUser {
    const user = localStorage.getItem(this.AUTH_USER_KEY)
    return user ? JSON.parse(user) : undefined;
  }

  private set token(t: string) {
    localStorage.setItem(this.TOKEN_KEY, t);
  }

  private get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private get basePath(): string {
    return `${environment.api}/auth`;
  }
}
