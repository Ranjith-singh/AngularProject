import { Routes } from '@angular/router';
import { Employee } from './features/employee/employee';
import { Notfound } from './features/notfound/notfound';
import { Login } from './features/login/login';
import { appCanLoad, appGuardGuard } from './appService/guards/app-guard-guard';
import { Comments } from './features/comments/comments';
import { commentsGuard } from './features/comments/guards/comments-guard';

export const routes: Routes = [
    {
        path: `rooms`,
        loadChildren : ()=> import('./features/patient-details/patient-details.routes')
            .then(patientDetails=> patientDetails.PATIENT_ROUTES),
        canActivate: [appGuardGuard],
        canMatch: [appCanLoad]
    },
    // {path: `rooms`, children: PATIENT_ROUTES},
    {path: `employee`, component: Employee,
        canActivate: [appGuardGuard], canMatch: [appCanLoad]
    },
    {path: `login`, component: Login},
    {
        path: `comments`,
        component: Comments,
        canActivate: [appGuardGuard],
        resolve: {comments: commentsGuard}
    },
    {path: ``, redirectTo: `login`, pathMatch: 'full'},
    {path: `**`, component: Notfound}
    // {path: ``, component: PatientDetails}
];
