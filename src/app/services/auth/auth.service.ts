import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthUser } from 'src/app/models';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly TOKEN_KEY = 'auth-token';

  get authUser(): AuthUser { return this._authUser; }
  set authUser(user: AuthUser) {
    this._authUser = user;
  }

  private _authUser: AuthUser;

  constructor(private _http: HttpClient) { }

  login({email, password}: {email: string, password: string}): Observable<AuthUser> {
    const path = `${this.basePath}?pass=${password}?email=${email}`;
    return this._http.get<AuthUser>(path)
      .pipe(tap( auth => this.authUser = new AuthUser(auth)));
  }

  isTokenValid(): Observable<boolean> {
    if (this.token) {
      const path = `${this.basePath}/auth/chack?token=${this.token}`;
      return this._http.get<boolean>(path);
    }
    return of(false);
  }

  get basePath(): string {
    return `${environment.api}/auth`;
  }

  set token(t: string) {
    localStorage.setItem(this.TOKEN_KEY, t);
  }

  get token(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
