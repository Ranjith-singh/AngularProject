import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsInterface } from '../comments.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<CommentsInterface[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
