import { TestBed } from '@angular/core/testing';

import { DebtListGuard } from './debt-list.guard';

describe('DebtListGuard', () => {
  let guard: DebtListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DebtListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
