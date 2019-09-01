import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Account } from 'src/app/models';

const USERS_LIST = [
  {id: 1, name: 'Erica', email: 'erica@gmail.com', account: '12345-1', agency: '12', document: 'SH1', balance: 0},
  {id: 2, name: 'Tomas', email: 'tomas@gmail.com', account: '54321-6', agency: '7', document: 'HH3', balance: 0},
  {id: 3, name: 'Bruna', email: 'bruna@gmail.com', account: '26354-0', agency: '13', document: 'D7', balance: 0},
  {id: 4, name: 'Leandro', email: 'leandro@gmail.com', account: '87956-5', agency: '2', document: 'D20', balance: 0},
  {id: 0, name: 'admin', email: 'admin', account: '0-0', agency: '0', document: '0', balance: 0, admin: true},
];

@Injectable()
export class MockBackEndService implements HttpInterceptor {

  accounts: Account[];

  constructor() {
    this.accounts = USERS_LIST.map( acc => new Account(acc));
   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    return of(this.manageRequest(request)).pipe(delay(500));
  }

  private manageRequest(request: HttpRequest<any>): HttpResponse<any> {
    const {url, method, body} = request;
    let response: any = {};
    if (method === 'GET' && url.includes('list')) {
      const [, queryParamns] = url.split('?');
      response =  {body: this.getList(queryParamns), status: 200};
    } else if (method === 'GET') {
      const [id] = url.split('/').reverse();
      response =  {body: this.getAccount(id), status: 200};
    } else if (method === 'POST') {
      response =  {body: this.createAccount(body), status: 200};
    } else if (method === 'PATCH') {
      const [id] = url.split('/').reverse();
      response =  {body: this.patchAccount(body, id), status: 200};
    } else if (method === 'DELETE') {
      const [id] = url.split('/').reverse();
      response =  {body: this.deleteAccount(id), status: 200};
    } else {
      response = {status: 404 };
    }

    return new HttpResponse(response);
  }

  private getList(qParamns?: string): Account[] {
    if (!qParamns) {
      return this.accounts.reverse();
    }

    const filter = this.extractQueryParamns(qParamns);

    return this.accounts
      .reverse()
      .filter( a => {
        let isSimilar = false;
        for (const key in a) {
          if (a.hasOwnProperty(key) && !isSimilar) {
            const value = a[key];
            isSimilar = `${value}`.toLowerCase().includes(filter.filter.toLowerCase());
          }
        }
        return isSimilar;
      });
  }

  private extractQueryParamns(aqueryParamns: string): any {
    return aqueryParamns.split('&').reduce( (paramns, keyValue) => {
      const [ key, value] = keyValue.split('=');
      return {...paramns, [key]: value };
    }, {});
  }

  private getAccount(id: string): Account {
    return this.accounts.find( ({id: userId}) => userId === parseInt(id, 0));
  }

  private createAccount(data: any): Account {
    const a  = new Account(data);
    a.id = this.accounts.length;
    this.accounts.push(a);
    return new Account(a);
  }

  private patchAccount(data: any, id: string): Account {
    const a  = this.accounts.find( ({id: userId}) => userId === parseInt(id, 0));
    for (const key in data) {
      if (data.hasOwnProperty(key) && 'id' !== key) {
        a[key] = data[key];
      }
    }
    return new Account(a);
  }

  private deleteAccount(id: string): boolean {
    const innitialLength = this.accounts.length;
    this.accounts.filter( ({id: userId}) => userId !== parseInt(id, 0));
    return innitialLength > this.accounts.length;
  }
}
