import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BookingService{
  constructor(private http: HttpClient) {

  }

  addBooking(bookingFrom: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', bookingFrom);
  }
}
