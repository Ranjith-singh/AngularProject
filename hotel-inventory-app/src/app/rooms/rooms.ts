import { AfterViewInit, Component, DoCheck, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Room } from './Room';
import { CommonModule } from '@angular/common';
import { RoomsList } from "./rooms-list/rooms-list";
import { Header } from '../header/header';
import { RoomService } from './service/room-service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsList, Header],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
  // providers: [RoomService]
})
export class Rooms implements OnInit, DoCheck, AfterViewInit {
  showRooms: boolean = true;
  rooms: Room[] = [];
  selectedRoom!: Room
  increamentedId= 4
  title: string= 'Room Lists...'

  downloadedBytes= 0
  rooms$!: Observable<Room[]>;
  getError$!: Observable<string>;

  stream= new Observable((observer)=>{
    observer.next("user1")
    observer.next("user2")
    observer.next("user3")
    observer.complete()
    observer.error()
  })

  @ViewChild(Header, {static: true}) headerComponent!: Header

  constructor(private cdr: ChangeDetectorRef, private roomService: RoomService) {}

  ngOnInit(): void {
    this.getError$= this.roomService.error$.asObservable();
    this.rooms$= this.roomService.getRooms$;
    console.log(this.getError$);

    this.roomService.getPhotos().subscribe((event)=>{
      switch (event.type){
        case HttpEventType.Sent: {
          console.log("Sent request to the server");
          break
        }
        case HttpEventType.ResponseHeader: {
          console.log("Response Headers sent")
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.downloadedBytes+= event.loaded
          console.log(`downloadedBytes: ${this.downloadedBytes}`);
          this.cdr.detectChanges()
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    })
    // this.roomService.getRooms().subscribe((rooms)=>{
    //   this.rooms= rooms
    //   this.cdr.detectChanges()
    //   // console.log(this.rooms)
    // })
    this.roomService.getRooms$.subscribe((rooms)=>{
      this.rooms= rooms
      this.cdr.detectChanges()
      // console.log(this.rooms)
    })
    this.stream.subscribe({
      next: (data)=> console.log(data),
      complete: ()=> console.log("completed"),
      error: (err)=> console.log("error", err)
    })

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
        roomNumber: this.increamentedId.toString() ,
        roomType: "AC",
        amenities: "Catering",
        price: 2000,
        photos: "heelo",
        checkinTime: new Date("2025-12-22"),
        checkoutTime: new Date("2025-12-22"),
        rating: 4.2
    }
    this.increamentedId++
    // this.rooms= [...this.rooms, room]
    this.roomService.addRoom(room).subscribe((rooms)=>{
      this.rooms= rooms
      this.cdr.detectChanges()
    })
  }

  updateRoom(){
    const room: Room= {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    }

    this.roomService.updateRoom(room).subscribe((rooms)=>{
      this.rooms= rooms
      this.cdr.detectChanges()
    })
  }

  deleteRoom(){
    this.roomService.deleteRoom('59e7e5bf-cf01-4af7-9f7f-83087c483f8a').subscribe((rooms)=>{
      this.rooms= rooms
      this.cdr.detectChanges()
    })
  }
}
