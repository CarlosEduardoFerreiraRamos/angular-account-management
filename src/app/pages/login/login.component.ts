import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  onValidate($event) {
    console.log($event)
    this._auth.login($event)
      .subscribe(
        () => {
          console.log('verify');
          this._router.navigate(['']);
        },
        (error) => console.error('invalid login')
        )
  }

}
