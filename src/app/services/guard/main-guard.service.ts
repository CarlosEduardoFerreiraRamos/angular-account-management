import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable()
export class MainGuardService implements CanActivate {

  constructor(private _router: Router, private _auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this._auth.isTokenValid().pipe(map( isAllowed => {
      if (isAllowed) {
        return true;
      } else {
        this._router.navigate(['login']);
        return false;
      }
    }));
  }
}
