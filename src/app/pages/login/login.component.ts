import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../app/services/auth/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean;

  errorMensage: string;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onValidate($event) {
    this.errorMensage = '';
    this.isLoading = true;
    this._auth.login($event)
      .pipe(finalize( () => this.isLoading = false))
      .subscribe(
        () => {
          console.log('verify');
          this._router.navigate(['']);
        },
        (error) => {
          this.errorMensage = error;
          console.error('invalid login:', error)
        }
      )
  }

}
