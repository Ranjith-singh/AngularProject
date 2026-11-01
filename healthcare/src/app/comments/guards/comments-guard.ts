import {ResolveFn } from '@angular/router';
import { CommentsInterface } from '../comments.interface';
import { inject } from '@angular/core';
import { CommentService } from '../service/comment-service';

export const commentsGuard: ResolveFn<CommentsInterface[]> = (route, state) => {
  const commentService= inject(CommentService);
  return commentService.getComments()
};
