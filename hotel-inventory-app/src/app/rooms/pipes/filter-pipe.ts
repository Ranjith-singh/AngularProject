import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../Room';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(rooms: Room[] | null, price: number): Room[] | null {
    if(!rooms) return [];
    return rooms.filter((room)=>room.price<=price);
  }

}
