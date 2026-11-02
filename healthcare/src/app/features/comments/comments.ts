import { Component } from '@angular/core';
import { CommentService } from './service/comment-service';
import { map, Observable } from 'rxjs';
import { CommentsInterface } from './comments.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hcare-comments',
  imports: [CommonModule],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments {
  comments$?: Observable<CommentsInterface[]>;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    // this.comments$= this.commentService.getComments();
    this.comments$= this.route.data.pipe(
      map((data)=> data['comments'])
    );
  }
}
