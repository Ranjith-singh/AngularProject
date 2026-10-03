import { Routes } from '@angular/router';
import { PatientDetails } from './patient-details/patient-details';
import { Employee } from './employee/employee';
import { Notfound } from './notfound/notfound';
import { BookRoom } from './book-room/book-room';
import { AddRooms } from './add-rooms/add-rooms';

export const    routes: Routes = [
    {path: `rooms`, component: PatientDetails},
    {path: `employee`, component: Employee},
    {path: `add-rooms`, component: AddRooms},
    {path: ``, redirectTo: `rooms`, pathMatch: 'full'},
    {path: `rooms/:id`, component: BookRoom},
    {path: `**`, component: Notfound}
    // {path: ``, component: PatientDetails}
];
