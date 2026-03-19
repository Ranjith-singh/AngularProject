import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsInterFace } from '../CommentsInterFace';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient){}

  getComments(): Observable<CommentsInterFace[]>{
    return this.http.get<CommentsInterFace[]>('https://jsonplaceholder.typicode.com/commentsds')
  }


}
