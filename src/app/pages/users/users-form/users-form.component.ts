import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../../../components/form/form.component';
import { first, finalize } from 'rxjs/operators';
import { Account } from '../../../models';
import { UserService } from '../../../services/user/user.service';

class FormData {
  account: string;
  agency: string;
  documentId: string;
  admin: boolean;
  name: string;
  email: string;
  password: string;
  constructor(data: Account) {
    this.account = data.account;
    this.agency = data.agency;
    this.documentId = data.documentId || '';
    this.admin = !!data.admin;
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements AfterViewInit {
  user: Account;

  title: string;

  isLoading: boolean;

  success: boolean;

  pageState: string;

  @ViewChild(FormComponent, { static: false }) form: FormComponent;

  constructor(
    private _activateRout: ActivatedRoute,
    private _service: UserService,
    private _router: Router
  ) {}

  ngAfterViewInit() {
    this.fetchData();
  }

  onSave() {
    this.isLoading = true;
    if (this.pageState === 'NEW_USER') {
      const values = this.form.form.control.value;
      this._service
        .create(values)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(() => (this.success = true));
    } else {
      const values = this.form.form.control.value;
      const data: any = { ...this.user, ...values };
      this._service
        .patch(data)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(() => (this.success = true));
    }
  }

  onCancel() {
    this._router.navigate(['']);
  }

  onDelete() {
    this._service
      .remove(this.user.id)
      .subscribe(() => this._router.navigate(['']));
  }

  get isFormValid(): boolean {
    return !!this.form && this.form.form.control.status !== 'VALID';
  }

  private async fetchData(): Promise<void> {
    const { newUser, account } = await this._activateRout.data
      .pipe(first())
      .toPromise();
    this.user = account;
    this.title = account ? account.name : 'New user';
    this.pageState = newUser ? 'NEW_USER' : 'EDIT_USER';
    if (!newUser) {
      const data = new FormData(this.user);
      this.form.form.control.setValue(data);
    }
  }
}
