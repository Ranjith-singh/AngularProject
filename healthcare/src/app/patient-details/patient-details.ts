import {Component, OnInit, ViewContainerRef, ViewChild, ElementRef, signal, WritableSignal } from '@angular/core';
import { RoomList, Rooms, RoomType } from './rooms';
import {CommonModule } from '@angular/common';
import { RoomsDetail } from './rooms-detail/rooms-detail';

@Component({
  selector: 'hcare-patient-details',
  imports: [CommonModule, RoomsDetail],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.scss',
})

export class PatientDetails implements OnInit {
  patientName: string= 'John';
  age: number= 30;
  address: string= `${this.patientName} Highway 71`;
  showDetails: WritableSignal<boolean> = signal(true);
  showRooms: boolean= true;
  hospitalRooms: Rooms= {
    totalRooms: 20,
    bookedRooms: 12
  }

  hospitalRoomsDetails?: RoomList[];
  selectedRoom?: RoomList;
  title: string= '';
  @ViewChild('user', {read: ElementRef, static: true}) elementRef?: ElementRef;

  constructor() {
    this.title= "Room List"
  }

  ngOnInit() {
    this.hospitalRooms.availableRooms=
      (this.hospitalRooms?.totalRooms ?? 0)
      - (this.hospitalRooms?.bookedRooms ?? 0);
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
    if(this.elementRef?.nativeElement) {
      this.elementRef.nativeElement.textContent= 'halla bol';
    }
  }

  toggle() {
    this.showDetails.update((prev)=> !prev);
    this.showRooms= !this.showRooms;
    console.log(this.showDetails);
    // console.log(`Show Rooms: ${this.showDetails && this.hospitalRooms.availableRooms && this.hospitalRooms.availableRooms> 1}`)
    this.title= "Rooms List";
  }

  add(room: RoomList) {
    console.log("selected Room: ",room?.roomNumber)
    this.selectedRoom= room;
    // this.hospitalRoomsDetails?.push(room);
    const prevHospitalRooms= this.hospitalRoomsDetails?? []
    this.hospitalRoomsDetails= [...prevHospitalRooms, room]
    // console.log(this.hospitalRoomsDetails);
  }
}
