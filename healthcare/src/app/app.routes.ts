import { Routes } from '@angular/router';
import { RoomsDetail } from './patient-details/rooms-detail/rooms-detail';
import { PatientDetails } from './patient-details/patient-details';
import { Employee } from './employee/employee';

export const routes: Routes = [
    {path: `rooms`, component: PatientDetails},
    {path: `employee`, component: Employee},
    {path: ``, redirectTo: `rooms`, pathMatch: 'full'}
    // {path: ``, component: PatientDetails}
];
