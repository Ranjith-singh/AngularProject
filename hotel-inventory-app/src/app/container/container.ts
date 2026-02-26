import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { Employee } from '../employee/employee';
import { RoomService } from '../rooms/service/room-service';

@Component({
  selector: 'app-container',
  imports: [CommonModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
  // providers: [RoomService]
})
export class Container implements AfterContentInit{
  @ContentChild(Employee) employee!: Employee

  constructor(private roomService: RoomService){

  }

  ngAfterContentInit(): void {
      this.employee.name= "Deloitte"
  }
}
