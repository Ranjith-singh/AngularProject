import { Component, ChangeDetectorRef, signal } from '@angular/core';
import { Room } from '../Room';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomService } from '../service/room-service';

@Component({
  selector: 'app-add-room',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-room.html',
  styleUrl: './add-room.scss',
})
export class AddRoom {
  room: Room= {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }
  // successMessage: string= '';
  successMessage= signal('');

  constructor(private roomService: RoomService,
      private cdr: ChangeDetectorRef
  ){}

  addRoom(roomForm: NgForm){
    this.roomService.addRoom(this.room).subscribe(()=>{
      // this.successMessage= 'Room Created Successfully'
      // this.cdr.detectChanges()
      this.successMessage.set('Room Created Successfully')
      roomForm.resetForm({
        roomType: '',
        amenities: '',
        price: 0,
        photos: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0
      })
    })
  }
}
