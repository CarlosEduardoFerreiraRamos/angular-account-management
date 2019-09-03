import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private _router: Router, private _auth: AuthService) {}

  canActivate(): boolean  {
    if (this._auth.authUser.admin) {
      return true;
    } else {
      this._router.navigate(['']);
      return false;
    }
  }
}

