import { ResolveFn } from '@angular/router';
import { CommentsInterFace } from '../CommentsInterFace';
import { inject } from '@angular/core';
import { CommentService } from '../service/comment-service';

export const commentGuard: ResolveFn<CommentsInterFace[]> = () => {
  const commentService= inject(CommentService)
  return commentService.getComments()
};
