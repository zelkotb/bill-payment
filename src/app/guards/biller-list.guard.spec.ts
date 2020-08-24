import { TestBed } from '@angular/core/testing';

import { BillerListGuard } from './biller-list.guard';

describe('BillerListGuard', () => {
  let guard: BillerListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BillerListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
