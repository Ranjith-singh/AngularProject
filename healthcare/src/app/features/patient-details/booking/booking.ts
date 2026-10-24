import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

enum BOOKING_STATUS {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
  }

@Component({
  selector: 'hcare-booking',
  providers: [
    provideNativeDateAdapter()
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking implements OnInit {
  bookingGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookingGroup = this.formBuilder.group({
      bookingId: new FormControl(''),
      roomId: new FormControl(''),
      guestEmail: new FormControl(''),
      checkinDate: new FormControl(new Date()),
      checkoutDate: new FormControl(new Date()),
      bookingStatus: new FormControl<BOOKING_STATUS | null>(null),
      bookingAmount: [NaN],
      bookingDate: new FormControl(new Date()),
      mobileNumber: new FormControl(''),
      guestName: new FormControl(''),
      guestAddress: new FormControl(''),
      guestCity: new FormControl(''),
      guestState: new FormControl(''),
      guestCountry: new FormControl(''),
      guestZipCode: new FormControl(''),
      guestCount: [NaN],
      guestList: new FormControl([])
    })
  }

  get roomId() {
    return this.bookingGroup.get('roomId') as FormControl;
  }

  get guestEmail() {
    return this.bookingGroup.get('guestEmail') as FormControl;
  }

  get checkinDate() {
    return this.bookingGroup.get('checkinDate') as FormControl;
  }

  get checkoutDate() {
    return this.bookingGroup.get('checkoutDate') as FormControl;
  }

  get bookingStatus() {
    return this.bookingGroup.get('bookingStatus') as FormControl;
  }

  get bookingDate() {
    return this.bookingGroup.get('bookingDate') as FormControl;
  }

  get bookingAmount() {
    return this.bookingGroup.get('bookingAmount') as FormControl;
  }

  get mobileNumber() {
    return this.bookingGroup.get('mobileNumber') as FormControl;
  }
}
