import { Component } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { fade } from './animations/fade';
import { routerFade } from './animations/router-fade';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerFade],
})
export class AppComponent {
  public isRoutLoading = false;

  constructor(private _router: Router, private _auth: AuthService) {}

  public ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isRoutLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isRoutLoading = false;
      }
    });
  }

  public prepareRoute(outlet: RouterOutlet): string | void {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  public get hasUser(): boolean {
    return !!this._auth.authUser;
  }

  public get userName(): string {
    return this.hasUser ? this._auth.authUser.name : '';
  }

  public toProfile(): void {
    this._router.navigate(['profile']);
  }

  public onLogout(): void {
    this._auth.logout();
    location.reload();
  }
}
