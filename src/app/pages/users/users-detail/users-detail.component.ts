import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { FormComponent } from '../../../components/form/form.component';
import { UserService } from '../../../services/user/user.service';
import { Account } from '../../../models';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements AfterViewInit {
  user: Account;

  title: string;

  isLoading: boolean;

  success: boolean;

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
    const password = this.form.form.controls['newassword'].value;
    const data: any = { ...this.user, ...{ password } };
    this._service
      .patch(data)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(() => (this.success = true));
  }

  onCancel() {
    this._router.navigate(['']);
  }

  private async fetchData(): Promise<void> {
    const { account } = await this._activateRout.data.pipe(first()).toPromise();
    this.user = account;
    this.title = account.name;
  }
}
