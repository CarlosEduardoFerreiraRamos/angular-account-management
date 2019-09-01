import { TestBed } from '@angular/core/testing';

import { MainGuardService } from './main-guard.service';

describe('MainGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainGuardService = TestBed.get(MainGuardService);
    expect(service).toBeTruthy();
  });
});
