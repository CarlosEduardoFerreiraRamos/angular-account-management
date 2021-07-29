import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from '../../../app/models';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly TOKEN_KEY = 'auth-token';

  readonly AUTH_USER_KEY = 'auth-user';

  get authUser(): AuthUser {
    return this._authUser;
  }
  set authUser(user: AuthUser) {
    this._authUser = user;
  }

  private _authUser: AuthUser;

  constructor(private _http: HttpClient) {}

  public login(body: {
    email: string;
    password: string;
  }): Observable<AuthUser> {
    const path = `${this.basePath}`;
    return this._http.post<AuthUser>(path, body).pipe(
      tap((auth) => {
        this.authUser = new AuthUser(auth);
        this.token = this.authUser.token;
      })
    );
  }

  public logout(): void {
    this.authUser = null;
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public set token(t: string) {
    localStorage.setItem(this.TOKEN_KEY, t);
  }

  public get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public isTokenValid(): Observable<AuthUser> {
    const path = `${this.basePath}/auth/check`;
    return this._http.get<AuthUser>(path);
  }

  private get basePath(): string {
    return `${environment.api}/auth`;
  }
}
