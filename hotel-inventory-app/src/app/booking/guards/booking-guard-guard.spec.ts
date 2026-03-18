import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { bookingGuardGuard } from './booking-guard-guard';

describe('bookingGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookingGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
