import { Inject, Injectable } from '@angular/core';
import { RoomList, RoomType } from '../rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { APP_CONFIG_SERVICE } from '../../appConfig/app.config.service';
import { APP_CONFIG } from '../../appConfig/app.config';
import { LocalStorageToken } from '../../localStorage/LocalStorage';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailsService {
  hospitalRoomsDetails: RoomList[] = [];
  Observer1?: Observer<string>;

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
  }

  getHospitalRoomsDetails(): RoomList[] {
    return this.hospitalRoomsDetails;
  }

  getHospitalRoomsformBackend(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/Rooms');
  }

  addHospitalRoom(room: RoomList): Observable<RoomList[]> {
    return this.http.post<RoomList[]>('/api/Rooms', room);
  }

  updateHospitalRoom(roomID: string, room: RoomList): Observable<RoomList[]> {
    console.log("RoomID", roomID);
    console.log("room", room.roomNumber);
    return this.http.put<RoomList[]>(`/api/Rooms/${roomID}`, room);
  }

  removeHospitalRoom(roomID: string): Observable<RoomList[]> {
    return this.http.delete<RoomList[]>(`/api/Rooms/${roomID}`);
  }

  getPhotos() {
    const request= new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(request);
  }
}