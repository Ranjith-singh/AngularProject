import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Component, inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BookingService{
  bookingFormInstance?: FormGroup;
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  addBooking(bookingFrom: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', bookingFrom);
  }

  openDialog(): void {
    const dialogRef = this._snackBar.open("Unsaved Changes", "ok");
  }

}
