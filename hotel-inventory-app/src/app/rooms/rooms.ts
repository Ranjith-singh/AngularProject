import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Room } from './Room';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";
import { Header } from '../header/header';
import { RoomService } from './service/room-service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsList, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit, DoCheck, AfterViewInit {
  showRooms: boolean = true;
  rooms: Room[]= [];
  selectedRoom!: Room
  increamentedId= 4
  title: string= 'Room Lists...'

  @ViewChild(Header, {static: true}) headerComponent!: Header

  constructor(private cdr: ChangeDetectorRef, private roomService: RoomService) {}

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms()
  }
  ngDoCheck(): void {
      console.log("Changes from Do Check")
  }
  ngAfterViewInit(): void {
      console.log(this.headerComponent)
      this.headerComponent.title = 'Dracaris';
      this.cdr.detectChanges();
  }
  toggle(): void {
    this.showRooms = !this.showRooms;
    this.title= "Hello"
  }
  displaySelectedRoom(room: Room){
    this.selectedRoom= room
    console.log(room)
  }
  addRoom(){
    const room: Room= {
        id: this.increamentedId,
        type: "AC",
        addOn: "Catering",
        foodMenu: "Dosa and Biryani",
        price: 2000,
        checkIn: new Date("2025-12-22"),
        rating: 4.2
    }
    this.increamentedId++
    this.rooms= [...this.rooms, room]
  }
}
