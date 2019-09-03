import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  user: Account;

  title: string;

  constructor(private _activateRout: ActivatedRoute) { }

  ngOnInit() {
    this._activateRout.data.subscribe( ({account}) => {
      this.user = account;
      this.title = account ? account.name : 'New user';
    })
  }

}
