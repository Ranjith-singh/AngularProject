import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Room } from '../Room';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsList implements OnChanges, OnDestroy {
  @Input() rooms: Room[] | null= []
  @Input() title: string = 'Room List'

  @Output() selectedRoom = new EventEmitter<Room>()

  selectRoom(room: Room) {
    this.selectedRoom.emit(room)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnDestroy(): void {
      console.log("on destroy is called");
  }

}
