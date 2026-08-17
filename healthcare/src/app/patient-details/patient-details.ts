import {Component, OnInit, ViewContainerRef, ViewChild, ElementRef, signal, WritableSignal, Self, Optional, Inject } from '@angular/core';
import { RoomList, Rooms, RoomType } from './rooms';
import {CommonModule } from '@angular/common';
import { RoomsDetail } from './rooms-detail/rooms-detail';
import { PatientDetailsService } from './service/patient-details-service';
import { Logger } from '../logger/logger';
import { APP_CONFIG } from '../appConfig/app.config';
import { APP_CONFIG_SERVICE } from '../appConfig/app.config.service';

@Component({
  selector: 'hcare-patient-details',
  imports: [CommonModule, RoomsDetail],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.scss'
})

export class PatientDetails implements OnInit {
  patientName: string= 'John';
  age: number= 30;
  address: string= `${this.patientName} Highway 71`;
  showDetails: WritableSignal<boolean> = signal(true);
  showRooms: boolean= true;
  hospitalRooms: Rooms= {
    totalRooms: 20,
    bookedRooms: 12
  }

  hospitalRoomsDetails?: RoomList[];
  selectedRoom?: RoomList;
  title: string= '';
  @ViewChild('user', {read: ElementRef, static: true}) elementRef?: ElementRef;

  constructor(
    private patientDetailsService: PatientDetailsService,
    @Optional()private logger: Logger,
    @Inject(APP_CONFIG_SERVICE) private appConfig: APP_CONFIG
  ) {
    this.title= "Room List"
    this.hospitalRoomsDetails= this.patientDetailsService.getHospitalRoomsDetails();
    console.log("App Config from patient details: ", this.appConfig.apiEndpoint);
  }

  ngOnInit() {
    this.hospitalRooms.availableRooms=
      (this.hospitalRooms?.totalRooms ?? 0)
      - (this.hospitalRooms?.bookedRooms ?? 0);
    if(this.elementRef?.nativeElement) {
      this.elementRef.nativeElement.textContent= 'halla bol';
    }
    this.logger?.log("PatientDetails component is created via logger service");
  }

  toggle() {
    this.showDetails.update((prev)=> !prev);
    this.showRooms= !this.showRooms;
    console.log(this.showDetails);
    // console.log(`Show Rooms: ${this.showDetails && this.hospitalRooms.availableRooms && this.hospitalRooms.availableRooms> 1}`)
    this.title= "Rooms List";
  }

  add(room: RoomList) {
    console.log("selected Room: ",room?.roomNumber)
    this.selectedRoom= room;
    // this.hospitalRoomsDetails?.push(room);
    const prevHospitalRooms= this.hospitalRoomsDetails?? []
    this.hospitalRoomsDetails= [...prevHospitalRooms, room]
    // console.log(this.hospitalRoomsDetails);
  }
}
