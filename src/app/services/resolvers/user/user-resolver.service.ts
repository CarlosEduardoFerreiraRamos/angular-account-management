import { Injectable } from '@angular/core';
import { Account } from '../../../models';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../../user/user.service';
import { map, first } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class UserResolverService implements Resolve<Account> {

  constructor(
    private _authUser: AuthService,
    private _userService: UserService,
    private _router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Account> {
    if (route.data.newUser) {
      return of(new Account());
    } else {
      const {id} = route.data.userOnly ? this._authUser.authUser : route.params;
      return this._userService.get(id).pipe(map( (v) => {
        if (v) {
          return v;
        } else {
          this._router.navigate(['']);
          return v;
        }
      }), first());
    }
  }
}
