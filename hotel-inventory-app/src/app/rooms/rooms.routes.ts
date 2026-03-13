import { Routes } from "@angular/router";
import { Rooms } from "./rooms";
import { AddRoom } from "./add-room/add-room";
import { BookRoom } from "./book-room/book-room";
import { Config } from "../service/config";
import { RouteConfigToken } from "../service/routeConfig.service";
import { roomsGuard } from "./guards/rooms-guard";

export const roomRoutes: Routes= [
    {
        path: '',
        providers: [
            Config,
            {
                provide: RouteConfigToken,
                useValue: {title: "room"}
            }
        ],
        component: Rooms,
        canActivateChild: [roomsGuard],
        children: [
        {path: 'add-room', component: AddRoom},
        {path: ':roomID', component: BookRoom}
    ]}
    // {path: 'add-room', component: AddRoom},
    // {path: ":roomID", component: BookRoom},
]