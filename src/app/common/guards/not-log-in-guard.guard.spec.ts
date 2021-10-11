import { TestBed } from '@angular/core/testing';

import { NotLogInGuardGuard } from './not-log-in-guard.guard';

describe('NotLogInGuardGuard', () => {
  let guard: NotLogInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLogInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
