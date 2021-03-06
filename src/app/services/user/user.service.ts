import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Account } from '../../models';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getAll(filter?: string): Observable<Account[]> {
    let path = `${this.basePath}/list`;
    if (filter) {
      path += `?filter=${filter}`
    }
    return this._http.get<Account[]>(path);
  }

  public get(id: number): Observable<Account> {
    const path = `${this.basePath}/${id}`;
    return this._http.get<Account>(path);
  }

  public create(form: any): Observable<Account> {
    const path = `${this.basePath}`;
    return this._http.post<Account>(path, form);
  }

  public patch(account: Account): Observable<Account> {
    const path = `${this.basePath}`;
    return this._http.patch<Account>(path, account);
  }

  public remove(id: number): Observable<boolean> {
    const path = `${this.basePath}/${id}`;
    return this._http.delete<boolean>(path);
  }

  private get basePath(): string {
    return `${environment.api}/user`;
  }
}
