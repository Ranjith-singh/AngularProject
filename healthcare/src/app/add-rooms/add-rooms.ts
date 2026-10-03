import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomList, RoomType } from '../patient-details/rooms';
import { PatientDetailsService } from '../patient-details/service/patient-details-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hcare-add-rooms',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-rooms.html',
  styleUrl: './add-rooms.scss',
})
export class AddRooms {
  RoomType= RoomType;

  room: RoomList= {
    roomType: RoomType.deluxe,
    price: 0,
    checkIn: new Date(),
    checkOut: new Date(),
    rating: 0
  }

  sucessMessage: string= '';

  constructor(private patientDetailsService: PatientDetailsService) {

  }
  addRoom(roomsForm: NgForm) {
    this.patientDetailsService.addHospitalRoom(this.room);
    this.sucessMessage= 'Room Added Suceesfully';
    this.reset(roomsForm);
  }

  reset(roomsForm: NgForm) {
    roomsForm.resetForm({
      roomType: RoomType.deluxe,
      price: 0,
      checkIn: new Date(),
      checkOut: new Date(),
      rating: 0
    });
  }
}
