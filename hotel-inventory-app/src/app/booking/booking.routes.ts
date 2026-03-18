import { Routes } from "@angular/router";
import { Booking } from "./booking";
import { bookingGuardGuard } from "./guards/booking-guard-guard";

export const bookingRoutes: Routes= [
    {
        path: '',
        component: Booking,
        canDeactivate: [bookingGuardGuard]
    }
]