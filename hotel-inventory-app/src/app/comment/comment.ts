import { Component, OnInit } from '@angular/core';
import {CommentsInterFace} from './CommentsInterFace'
import { CommentService } from './service/comment-service';
import { map, Observable, pluck } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  imports: [CommonModule],
  templateUrl: './comment.html',
  styleUrl: './comment.scss',
})
export class Comment implements OnInit{
  comments$!: Observable<CommentsInterFace[]>;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ){
    // this.comments$= this.commentService.getComments()
    this.comments$= this.route.data.pipe(
      map((data)=>data['resolvedComponents'])
    )
  }

  ngOnInit() {
    // this.route.data.subscribe((data)=>{
    //   console.log(data['resolvedComponents']);
    // })
  }
}
