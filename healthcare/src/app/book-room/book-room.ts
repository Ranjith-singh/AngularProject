import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hcare-book-room',
  imports: [],
  templateUrl: './book-room.html',
  styleUrl: './book-room.scss',
})
export class BookRoom {
  id?: Number;
  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe((data)=> {
      console.log(data)
      this.id= data['id'];
    });
  }
}
