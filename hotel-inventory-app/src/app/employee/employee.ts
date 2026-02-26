import { Component, Self } from '@angular/core';
import { RoomService } from '../rooms/service/room-service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
  // providers: [RoomService]
})
export class Employee {
  constructor(private roomService: RoomService){

  }
  name: string= 'dell'
}
