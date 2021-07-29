import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { Account } from 'src/app/models';

describe('UserService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    })
  );

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should get',
    waitForAsync(
      inject([UserService], (service: UserService, s) => {
        const http: HttpTestingController = TestBed.get(HttpTestingController);
        const valExpected = [new Account({ balance: 321 })];

        service.getAll().subscribe(([{ balance }]) => {
          expect(valExpected[0].balance).toEqual(balance);
        });
        http.expectOne(`${environment.api}/user/list`).flush(valExpected);
      })
    )
  );
});
