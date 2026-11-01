import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../../rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(roomsDetails: RoomList[] | undefined, value: number): RoomList[] | undefined {
    return roomsDetails?.filter((room)=> room.price<= value);
  }

}
