import { AddRooms } from "./add-rooms/add-rooms";
import { BookRoom } from "./book-room/book-room";
import { PatientDetails } from "./patient-details";

export const PATIENT_ROUTES= [
    {path: ``, component: PatientDetails},
    {path: `add-rooms`, component: AddRooms},
    {path: `:id`, component: BookRoom},
]