import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-book-room',
  imports: [CommonModule],
  templateUrl: './book-room.html',
  styleUrl: './book-room.scss',
})
export class BookRoom implements OnInit{
  // id: number= 0
  id$!: Observable<number>
  constructor(private router: ActivatedRoute){

  }
  ngOnInit(){
    // this.router.params.subscribe((params)=>{
    //   this.id= params['roomID']
    // })
    // this.id= this.router.snapshot.params['roomID']
    this.id$= this.router.params.pipe(
      map((params)=> this.id$= params['roomID'])
    )
  }
}
