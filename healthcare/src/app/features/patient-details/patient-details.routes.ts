import { AddRooms } from "./add-rooms/add-rooms";
import { BookRoom } from "./book-room/book-room";
import { roomsGuard } from "./guards/rooms-guard";
import { PatientDetails } from "./patient-details";

export const PATIENT_ROUTES= [
    // {path: ``, component: PatientDetails},
    // {path: `add-rooms`, component: AddRooms},
    // {path: `:id`, component: BookRoom},
    {
        path: `booking`,
        loadChildren: ()=> import('./booking/booking.routes').then((bookingRoutes)=> bookingRoutes.BookingRoutes)
    },
    {
        path: ``,
        component: PatientDetails,
        children: [
            {path: `add-rooms`, component: AddRooms},
            {path: `:id`, component: BookRoom}
        ],
        canActivateChild: [roomsGuard]
    }
]