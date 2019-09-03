import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  isRoutLoading = false;

  constructor(private _router: Router, private _auth: AuthService) {}

   ngOnInit() {
    this._router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRoutLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRoutLoading = false;
      }
    });
  }

  get hasUser(): boolean {
    return !!this._auth.authUser;
  }

  toProfile() {
    this._router.navigate(['profile']);
  }

  onLogout() {
    this._auth.logout();
    location.reload();
  }
}
