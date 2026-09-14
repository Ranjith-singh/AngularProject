import { Inject, Injectable } from '@angular/core';
import { RoomList, RoomType } from '../rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { catchError, Observable, Observer, shareReplay, Subject } from 'rxjs';
import { APP_CONFIG_SERVICE } from '../../appConfig/app.config.service';
import { APP_CONFIG } from '../../appConfig/app.config';
import { LocalStorageToken } from '../../localStorage/LocalStorage';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailsService {
  hospitalRoomsDetails: RoomList[] = [];
  Observer1?: Observer<string>;
  // getRooms$?: Observable<any>;
  getRooms$= new Subject();

  stream= new Observable((observer)=> {
    observer.next("Hello from observable");
    observer.next("Hello from observable 2");
    this.Observer1= observer;
    observer.complete();
    observer.error("Error from observable");
  })
  
  constructor(
    @Inject(APP_CONFIG_SERVICE) private appConfig: APP_CONFIG,
    @Inject(LocalStorageToken) private localStorage: Storage,
    private http: HttpClient
  ){
    console.log("PatientDetailsService is created");
    console.log("App Config from patient details: ", this.appConfig.apiEndpoint);
    this.localStorage.setItem("name", "One for all, All for one");   
    this.hospitalRoomsDetails= [
      {
        roomNumber: '101',
        roomType: RoomType.general,
        price: 2000,
        checkIn: new Date('10-17-2025'),
        checkOut: new Date('10-19-2025'),
        rating: 4.215
      },
      {
        roomNumber: '102',
        roomType: RoomType.luxury,
        price: 5000,
        checkIn: new Date('10-17-2025'),
        checkOut: new Date('10-18-2025'),
        rating: 4.5
      },
      {
        roomNumber: '103',
        roomType: RoomType.deluxe,
        price: 8000,
        checkIn: new Date('10-10-2025'),
        checkOut: new Date('10-10-2025'),
        rating: 3.8123
      }
    ];
    this.stream.subscribe((data)=> {
      console.log("Data from observable: ", data);
    })
    // this.http.get<RoomList[]>(`/api/Room`).pipe(
    //   shareReplay(1)
    // );
    this.http.get<RoomList[]>(`/api/Rooms`, {headers: {token: "abcd"}})
    .pipe(shareReplay(1))
    .subscribe((rooms)=>{
      this.getRooms$.next(rooms);
    })
  }

  getHospitalRoomsDetails(): RoomList[] {
    return this.hospitalRoomsDetails;
  }

  // getHospitalRoomsformBackend(): Observable<RoomList[]> {
  //   this.getRooms$= this.http.get<RoomList[]>(`/api/Rooms`).pipe(shareReplay(1));
  //   return this.getRooms$;
  // }

  getHospitalRoomsformBackend(): void {
    this.http.get<RoomList[]>(`/api/Rooms`).subscribe((rooms)=>{
      this.getRooms$.next(rooms);
    });
  }

  addHospitalRoom(room: RoomList): void {
    // return this.http.post<RoomList[]>('/api/Rooms', room);
    // this.getRooms$= this.http.post<RoomList[]>('/api/Rooms', room);
    // return this.getRooms$
    this.http.post<RoomList[]>(`/api/Rooms`, room).subscribe((rooms)=>{
      this.getRooms$.next(rooms);
    });
  }

  updateHospitalRoom(roomID: string, room: RoomList): void {
    console.log("RoomID", roomID);
    console.log("room", room.roomNumber);
    // return this.http.put<RoomList[]>(`/api/Rooms/${roomID}`, room);
    // this.getRooms$= this.http.put<RoomList[]>(`/api/Rooms/${roomID}`, room);
    // return this.getRooms$
    this.http.put<RoomList[]>(`/api/Rooms/${roomID}`, room).subscribe((rooms)=>{
      this.getRooms$.next(rooms);
    });
  }

  removeHospitalRoom(roomID: string): void {
    // return this.http.delete<RoomList[]>(`/api/Rooms/${roomID}`);
    // this.getRooms$= this.http.delete<RoomList[]>(`/api/Rooms/${roomID}`);
    // return this.getRooms$
    this.http.delete<RoomList[]>(`/api/Rooms/${roomID}`).subscribe((rooms)=>{
      this.getRooms$.next(rooms);
    });
  }

  getPhotos() {
    const request= new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request<string>(request);
  }
}