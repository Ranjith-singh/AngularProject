import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Config } from '../service/config';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckbox } from '@angular/material/checkbox';
import { BookingService } from './service/booking-service';
import { exhaustMap, map, mergeMap, Observable, switchMap } from 'rxjs';
import { CustomValidatorClass } from './validators/custom-validator.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckbox
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true
})
export class Booking implements OnInit {
  bookingForm!: FormGroup
  bookingId!: string| null;
  constructor(
    private configService: Config,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
    // private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.bookingId = this.route.snapshot.paramMap.get('roomId');
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({
        value: this.bookingId,
        disabled: true},{validators: [Validators.required]}),
      guestEmail: ['', {
        validators: [Validators.required, Validators.email],
        // updateOn: 'blur'
      }],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['',[CustomValidatorClass.ValidatorName, CustomValidatorClass.ValidatorSplChar('*')]],
      address: this.formBuilder.group({
        AddressLine1: ['', [Validators.minLength(5)]],
        AddressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: ['', [Validators.required, Validators.minLength(5)]],
      }),
      // guests: new FormArray([])
      guests: new FormArray([
        this.addGuestControl()
      ]),
      tmc: new FormControl(false, {validators: [Validators.requiredTrue]})
      // guestCount: [''],
    },
    {
      updateOn: 'blur',
      validators: [CustomValidatorClass.dateValidator]
    }
  )
    // this.cdr.detectChanges()

    this.getBookingData()

    // this.bookingForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // })

    this.bookingForm.valueChanges.pipe(
      // mergeMap((data)=>(
      //   this.bookingService.addBooking(data)
      // ))
      // switchMap((data)=>(
      //   this.bookingService.addBooking(data)
      // ))
      exhaustMap((data)=>(
        this.bookingService.addBooking(data)
      ))
      ).subscribe((data)=>{
          // console.log(data);
      })
  }

  addGuestControl(){
    return this.formBuilder.group({
      guestName: ['', [Validators.required]],
      age: new FormControl('')
    })
  }
  addBooking(){
    // console.log(this.bookingForm.value)
    console.log(this.bookingForm.getRawValue())
    this.bookingForm.reset({
      // roomId: this.bookingId,
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      // guests: new FormArray([])
      guests: [],
      tmc: ''
    })
  }

  getBookingData(){
    this.bookingForm.patchValue({
      // roomId: this.bookingId,
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('20-Mar-2026'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tmc: ''
    })
  }

  // lets us use guests as a regular var instead of a method
  get guests(){
    return this.bookingForm.get('guests') as FormArray
  }

  addGuest(){
    this.guests.push(
      this.addGuestControl()
    )
  }
  removeGuest(i: number){
    this.guests.removeAt(i)
  }

  addPassword(){
    this.bookingForm.addControl('password', new FormControl(''))
  }
  deletePassword(){
    if(this.bookingForm.get('password')){
      this.bookingForm.removeControl('password')
    }
  }
}
