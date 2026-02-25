import { Injectable } from '@angular/core';
import { Room } from '../Room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {

  constructor(){
    console.log("Room Service Initialized");
  }
  rooms: Room[] = [
      {
        id: 1,
        type: "AC",
        addOn: "Catering",
        foodMenu: "Dosa and Biryani",
        price: 2000,
        checkIn: new Date("2025-12-22"),
        rating: 4.2
      },
      {
        id: 2,
        type: "Without AC",
        addOn: "None",
        foodMenu: "Dosa and idli",
        price: 700,
        checkIn: new Date("2025-12-22"),
        rating: 3.2
      },
      {
        id: 3,
        type: "Suite",
        addOn: "Catering and Samphane",
        foodMenu: "Aleo oleo, Saman with parmachan cheese",
        price: 5000,
        checkIn: new Date("2025-12-22"),
        rating: 2.6
      },
    ]

    getRooms(): Room[]{
      return this.rooms
    }
}
