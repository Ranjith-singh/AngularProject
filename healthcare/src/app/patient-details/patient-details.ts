import {Component, OnInit, ViewChild, ElementRef, signal, WritableSignal, ChangeDetectorRef } from '@angular/core';
import { RoomList, Rooms, RoomType } from './rooms';
import {CommonModule } from '@angular/common';
import { RoomsDetail } from './rooms-detail/rooms-detail';
import { PatientDetailsService } from './service/patient-details-service';
import { HttpDownloadProgressEvent, HttpEventType } from '@angular/common/http';
import { catchError, Observable, Observer, Subject } from 'rxjs';

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
  protected bytesDownloaded = signal(0);
  showDetails: WritableSignal<boolean> = signal(true);
  showRooms: boolean= true;
  hospitalRooms: Rooms= {
    totalRooms: 20,
    bookedRooms: 12
  }
  rooms$?= new Observable<any>;

  hospitalRoomsDetails: WritableSignal<RoomList[]>= signal([]);
  selectedRoom?: RoomList;
  title: string= '';
  @ViewChild('user', {read: ElementRef, static: true}) elementRef?: ElementRef;
  // getRoomsErrorObserver?: Observer<string>;
  // getRoomsError$ = new Observable((observer)=>{
  //   this.getRoomsErrorObserver= observer;
  // });
  getRoomsError$ = new Subject();
  // getRoomsErrorObserver= this.getRoomsError$.asObservable();

  constructor(
    private patientDetailsService: PatientDetailsService,
    private cdr: ChangeDetectorRef
    // @Optional()private logger: Logger
  ) {
    this.title= "Room List"
    // this.hospitalRoomsDetails= this.patientDetailsService.getHospitalRoomsDetails();
    // this.patientDetailsService.getHospitalRoomsformBackend().subscribe((rooms)=> {
    //   console.log("this.hospitalRoomsDetails", rooms);
    //   this.hospitalRoomsDetails.set(rooms);
    //   // this.cdr.markForCheck();
    //   console.log("this.hospitalRoomsDetails", this.hospitalRoomsDetails);
    // });
    this.rooms$= this.patientDetailsService.getRooms$?.pipe(
      catchError((err)=>{
        console.log(err);
        this.getRoomsError$?.next(err.message);
        return [];
      })
    );
    // this.getRoomsError.subscribe((data)=>{
    //   console.log(data);
    // })
    patientDetailsService.Observer1?.next("Hello from patient details component");
    patientDetailsService.stream.subscribe({
      next: (data)=> console.log("Data from observable in patient details: ", data),
      error: (error)=> console.log("Error from observable in patient details: ", error),
      complete: ()=> console.log("Observable is completed in patient details")
    });
    patientDetailsService.getPhotos().subscribe((response)=>{
      switch(response.type) {
        case HttpEventType.Sent:
          console.log("request sent to server");
          break;
        case HttpEventType.UploadProgress:
          console.log("Upload data sent from user");
          break;
        case HttpEventType.ResponseHeader:
          console.log("Receive response header from server");
          break;
        case HttpEventType.DownloadProgress:
          this.bytesDownloaded.set(response.loaded);
          console.log(`data downloading sent from server: ${this.bytesDownloaded()}`);
          const partialData= response as HttpDownloadProgressEvent;
          console.log(partialData.partialText);
          break;
        case HttpEventType.Response:
          console.log("Full response was received:");
          const completeData= JSON.parse(response.body ?? '[]');
          console.log(completeData);
          // console.log(response.body.toJson());
          break;
        case HttpEventType.User:
          console.log("Custom event configured from user at the interpretor or backend level");
          break;
      }
      console.log(response);  
    })
  }

  ngOnInit() {
    this.hospitalRooms.availableRooms=
      (this.hospitalRooms?.totalRooms ?? 0)
      - (this.hospitalRooms?.bookedRooms ?? 0);
    if(this.elementRef?.nativeElement) {
      this.elementRef.nativeElement.textContent= 'halla bol';
    }
    // this.logger?.log("PatientDetails component is created via logger service");
    // this.patientDetailsService.getHospitalRoomsformBackend().subscribe((rooms)=> {
    //   console.log("this.hospitalRoomsDetails", rooms);
    //   this.hospitalRoomsDetails= rooms;
    //   console.log("this.hospitalRoomsDetails", this.hospitalRoomsDetails);
    // });
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
    const prevHospitalRooms= this.hospitalRoomsDetails?? [];
    this.hospitalRoomsDetails.set([...prevHospitalRooms(), room]);
    // console.log(this.hospitalRoomsDetails);
  }

  updateRoom(roomID: string) {
    const room: RoomList= {
      roomNumber: '100',
      roomType: RoomType.general,
      price: 2000,
      checkIn: new Date('10-17-2025'),
      checkOut: new Date('10-19-2025'),
      rating: 4.215
    }
    // console.log("Update Room: ", room?.roomNumber);
    // this.patientDetailsService.updateHospitalRoom(roomID, room).subscribe((rooms)=> {
    //   console.log("Update Room: ", rooms);
    //   this.hospitalRoomsDetails.set(rooms);
    //   // this.cdr.markForCheck();
    // });
    // this.rooms$= this.patientDetailsService.updateHospitalRoom(roomID, room);
    this.patientDetailsService.updateHospitalRoom(roomID, room);
  }

  removeRoom(roomID: string) {
    // console.log("Update Room: ", room?.roomNumber);
    // this.patientDetailsService.removeHospitalRoom(roomID).subscribe((rooms)=> {
    //   this.hospitalRoomsDetails.set(rooms);
    //   // this.cdr.markForCheck();
    // });
    this.patientDetailsService.removeHospitalRoom(roomID);
  }

  addDefaultRoom() {
    const room: RoomList= {
      roomType: RoomType.general,
      price: 2000,
      checkIn: new Date('10-17-2025'),
      checkOut: new Date('10-19-2025'),
      rating: 4.215
    }
    // console.log("Adding default room: ", room);
    // this.patientDetailsService.addHospitalRoom(room).subscribe((rooms)=> {
    //   // this.hospitalRoomsDetails= rooms;
    //   this.hospitalRoomsDetails.set(rooms);
    //   console.log("this.hospitalRoomsDetails", this.hospitalRoomsDetails);
    //   // this.cdr.markForCheck();
    // });
    this.patientDetailsService.addHospitalRoom(room);
  }
}
