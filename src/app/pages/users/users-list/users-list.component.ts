import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isUserAdmin: boolean;

  users$: Observable<Account[]>;

  private _userList$ = new BehaviorSubject<Account[]>([]);

  constructor(
    private _service: UserService,
    private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this.setUser();
    this.initLists();
    this.fetchAccounts();
  }

  onSearch($event) {
    this.fetchAccounts($event.filter)
  }

  onRowClick($event) {
    this._router.navigate(['detail', $event.id])
  }

  onCreateClick() {
    this._router.navigate(['create'])
  }

  private initLists(): void {
    this.users$ = this._userList$.asObservable()
  }

  private setUser(): void {
    // this.isUserAdmin = this._auth.authUser.admin;
  }

  private fetchAccounts(filters?: any): void {
    this._service.getAll(filters).subscribe( acconts => this._userList$.next(acconts))
  }

}
