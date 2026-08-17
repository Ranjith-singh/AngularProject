import { Injectable } from '@angular/core';
import { RoomList, RoomType } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailsService {
  hospitalRoomsDetails: RoomList[] = [];
  
  constructor() {
    console.log("PatientDetailsService is created");
    this.hospitalRoomsDetails= [
      {
        roomNumber: 101,
        roomType: RoomType.general,
        price: 2000,
        checkIn: new Date('10-17-2025'),
        checkOut: new Date('10-19-2025'),
        rating: 4.215
      },
      {
        roomNumber: 102,
        roomType: RoomType.luxury,
        price: 5000,
        checkIn: new Date('10-17-2025'),
        checkOut: new Date('10-18-2025'),
        rating: 4.5
      },
      {
        roomNumber: 103,
        roomType: RoomType.deluxe,
        price: 8000,
        checkIn: new Date('10-10-2025'),
        checkOut: new Date('10-10-2025'),
        rating: 3.8123
      }
    ];
  }

  getHospitalRoomsDetails(): RoomList[] {
    return this.hospitalRoomsDetails;
  }
}
