import { Routes } from '@angular/router';
// import { Rooms } from './rooms/rooms';
import { Employee } from './employee/employee';
import { Notfound } from './notfound/notfound';
// import { BookRoom } from './rooms/book-room/book-room';
// import { AddRoom } from './rooms/add-room/add-room';
// import { roomRoutes } from './rooms/rooms.routes';
import { Login } from './login/login';
import { loginGuard } from './login/login-guard';

export const routes: Routes = [
    // {path: "rooms", component: Rooms},
    {
        path: "rooms",
        loadChildren: ()=> (
            import("./rooms/rooms.routes")
            .then(m=> m.roomRoutes)
            // roomRoutes
        ),
        canActivate: [loginGuard],
        canMatch: [loginGuard]
    },
    {
        path: "booking",
        loadChildren: ()=> import('./booking/booking.routes').then((m)=> m.bookingRoutes),
        // canActivate: [loginGuard],
        // canMatch: [loginGuard]
    },
    {path: "employee", component: Employee, canActivate: [loginGuard]},
    {path: "login", component: Login},
    {path: "", redirectTo: "login", pathMatch: "full"},
    // {path: "rooms/add-room", component: AddRoom},
    // {path: "rooms/:roomID", component: BookRoom},
    {path: "**", component: Notfound}
];
