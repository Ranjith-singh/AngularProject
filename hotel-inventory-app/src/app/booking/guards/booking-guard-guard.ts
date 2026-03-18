import { CanDeactivateFn } from '@angular/router';
import { Booking } from '../booking';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const bookingGuardGuard: CanDeactivateFn<Booking> =
  (component: Booking, currentRoute, currentState, nextState) => {
    const snackBar= inject(MatSnackBar)
    if(component.bookingForm.pristine){
      return component.bookingForm.pristine;
    }
    snackBar.open("You have some unsaved Changes", "Undo")
    return false

    // const snackBarRef= snackBar.open("You have some unsaved Changes", "Undo", {
    //   duration: 5000
    // })
    // return snackBarRef.onAction().pipe(
    //   tap(()=>{
    //     console.log("undone");
    //     component.bookingForm.reset()
    //   }),
    //   map(()=>true),
    //   startWith(false)
    // )
};
