import { Routes } from "@angular/router";
import { Rooms } from "./rooms";
import { AddRoom } from "./add-room/add-room";
import { BookRoom } from "./book-room/book-room";
import { Config } from "../service/config";

export const roomRoutes: Routes= [
    {
        path: '',
        providers: [Config],
        component: Rooms,
        children: [
        {path: 'add-room', component: AddRoom},
        {path: ':roomID', component: BookRoom}
    ]}
    // {path: 'add-room', component: AddRoom},
    // {path: ":roomID", component: BookRoom},
]