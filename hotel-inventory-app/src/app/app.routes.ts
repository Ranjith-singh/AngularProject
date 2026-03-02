import { Routes } from '@angular/router';
import { Rooms } from './rooms/rooms';
import { Employee } from './employee/employee';
import { Notfound } from './notfound/notfound';
import { BookRoom } from './rooms/book-room/book-room';
import { AddRoom } from './rooms/add-room/add-room';

export const routes: Routes = [
    {path: "rooms", component: Rooms},
    {path: "employee", component: Employee},
    {path: "", redirectTo: "rooms", pathMatch: "full"},
    {path: "rooms/add-room", component: AddRoom},
    {path: "rooms/:roomID", component: BookRoom},
    {path: "**", component: Notfound}
];
