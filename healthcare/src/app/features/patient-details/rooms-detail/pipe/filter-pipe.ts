import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../../rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(roomsDetails: RoomList[], value: number): RoomList[] {
    return roomsDetails.filter((room)=> room.price<= value);
  }

}
