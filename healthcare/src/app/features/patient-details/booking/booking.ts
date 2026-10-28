import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { BookingService } from './service/booking';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

export enum BOOKING_STATUS {
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
    MatDatepickerModule,
    MatButton,
    MatExpansionModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking implements OnInit {
  bookingGroup!: FormGroup;
  bookingStatusOptions = Object.values(BOOKING_STATUS);
  roomID?: number;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((data)=> {
      console.log(data);
      this.roomID= data['id'];
    })
    this.bookingGroup = this.formBuilder.group({
      bookingId: new FormControl(''),
      roomId: new FormControl({value: this.roomID, disabled: true}),
      guestEmail: new FormControl('', {
        updateOn: 'change' ,
        validators: [
            Validators.email,
            Validators.minLength(5),
            CustomValidator.validateGuestEmail,
            CustomValidator.validateSpecialChar('!')
          ],
      }),
      checkinDate: new FormControl(new Date()),
      checkoutDate: new FormControl(new Date()),
      bookingStatus: new FormControl<BOOKING_STATUS | null>(null, Validators.required),
      bookingAmount: [NaN],
      bookingDate: new FormControl(new Date()),
      mobileNumber: new FormControl('', {
        validators: [Validators.min(11111)]}),
      guestName: new FormControl(''),
      Address: this.formBuilder.group({
        street: new FormControl('', {updateOn: 'blur'}),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guestCount: [NaN],
      guestList: new FormArray([
        this.formBuilder.group({
          name: new FormControl(''),
          age: new FormControl('')
        })
      ]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]})
    }, {
      updateOn: 'change', validators : [CustomValidator.validateDate]
    });

    this.bookingService.bookingFormInstance= this.bookingGroup;

    // this.bookingGroup.setValue({
    //   bookingId: '',
    //   roomId: '2',
    //   guestEmail: 'user@gmail.com',
    //   checkinDate: new Date(),
    //   checkoutDate: new Date(),
    //   bookingStatus: null,
    //   bookingAmount: NaN,
    //   bookingDate: new Date(),
    //   mobileNumber: '',
    //   guestName: '',
    //   Address: {
    //     street: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   guestCount: NaN,
    //   guestList: [],
    //   tnc: false
    // });
    this.bookingGroup.patchValue({
      guestEmail: 'user@gmail.com',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      bookingDate: new Date(),
      tnc: false
    });
    // console.log(this.guestList.controls);

    // this.bookingGroup.valueChanges.subscribe((data)=> {
    //   console.log(data);
    //   this.bookingService.addBooking(data).subscribe();
    // });
    this.bookingGroup.valueChanges.pipe(
      // mergeMap((data)=> {
      //   return this.bookingService.addBooking(data)
      // })
      // switchMap((data)=> {
      //   return this.bookingService.addBooking(data);
      // })
      exhaustMap((data)=> {
        return this.bookingService.addBooking(data);
      })
    ).subscribe();
  }

  get guestList() {
    return this.bookingGroup.get('guestList') as FormArray;
  }

  addBooking() {
    console.log(this.bookingGroup.getRawValue());
    this.bookingGroup.reset({
      bookingId: '',
      roomId: '2',
      guestEmail: '',
      checkinDate: new Date(),
      checkoutDate: new Date(),
      bookingStatus: null,
      bookingAmount: NaN,
      bookingDate: new Date(),
      mobileNumber: '',
      guestName: '',
      Address: {
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guestCount: NaN,
      guestList: []
    })
  }

  addList() {
    this.guestList.push(
      this.formBuilder.group({name: [''], age: ['']})
    )
  }

  removeList(index: number) {
    console.log(index);
    this.guestList.removeAt(index);
  }

  addPassport() {
    this.bookingGroup.addControl('passport', new FormControl(''));
  }

  removePassport() {
    this.bookingGroup.removeControl('passport');
  }
}
