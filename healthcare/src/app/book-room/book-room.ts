import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'hcare-book-room',
  imports: [CommonModule],
  templateUrl: './book-room.html',
  styleUrl: './book-room.scss',
})
export class BookRoom {
  id?: Number;
  id$?: Observable<any>= of(0);

  constructor(private router: ActivatedRoute) {
    // this.router.params.subscribe((data)=> {
    //   console.log(data)
    //   this.id= data['id'];
    // });
    // this.id= this.router.snapshot.params['id'];
    // this.id$= this.router.params.pipe(
    //   map((params)=> params['id'])
    // );
    this.id$= this.router.paramMap.pipe(map((params)=> params.get('id')));
  }
}
