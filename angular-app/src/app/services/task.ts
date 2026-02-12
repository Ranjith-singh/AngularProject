import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions= {
  headers: new HttpHeaders({
    'content-type': "application/json",
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiPath= "http://localhost:5000/tasks"

  constructor(private http: HttpClient){

  }
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiPath)
  }

  removeTask(task: Task): Observable<Task>{
    const url= `${this.apiPath}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskRemainder(task: Task): Observable<Task>{
    const url= `${this.apiPath}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }
}
