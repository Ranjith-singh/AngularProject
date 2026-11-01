import { CanDeactivateFn } from '@angular/router';
import { Booking } from '../booking';
import { inject } from '@angular/core';
import { BookingService } from '../service/booking';

export const bookingGuardGuard: CanDeactivateFn<Booking> =
  (component, currentRoute, currentState, nextState) => {
    const bookingService= inject(BookingService);
    if(bookingService.bookingFormInstance?.pristine) {
      return true
    }
    bookingService.openDialog();
    return false;
  };
