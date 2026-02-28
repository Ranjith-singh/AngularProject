import { Injectable, Inject, ChangeDetectorRef } from '@angular/core';
import { Room } from '../Room';
import { APP_CONFIG_SERVICE } from '../../appConfig/appconfig.service';
import { AppConfig } from '../../appConfig/appconfig';
import { LocalStorageToken } from '../../LocalStorage';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, map, Observable, of, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  roomsSubject$= new Subject<Room[]>();
  getRooms$!: Observable<Room[]>;
  rooms: Room[]= []
  error$= new Subject<string>()
  // headers= new HttpHeaders({'token': '123123123'})

  constructor(
  @Inject(APP_CONFIG_SERVICE) private config: AppConfig,
  @Inject(LocalStorageToken) private localStorage: Storage,
  private http: HttpClient){
    // console.log(environment.apiEndpoint);
    console.log(config.apiEndpoint);
    console.log("Room Service Initialized");
    
    // this.localStorage.setItem("name", "hitesh Choudary");

    this.getRooms$= this.http.get<Room[]>('/api/rooms').pipe(
      tap((rooms)=>{
        this.roomsSubject$.next(rooms)
      }),
      shareReplay(1),
      catchError((err)=>{
        this.error$.next(err.message)
        return of([]);
      })
    );
    // this.http.get<Room[]>('/api/rooms').pipe(
    //   shareReplay(1),
    //   tap((rooms)=>{
    //     this.roomsSubject.next(rooms)
    //   }),
    //   catchError((err)=>{
    //     this.error$.next(err.message)
    //     return of([]);
    //   })
    // );
  }

  // rooms: Room[] = [
  //   {
  //     id: 1,
  //     type: "AC",
  //     addOn: "Catering",
  //     foodMenu: "Dosa and Biryani",
  //     price: 2000,
  //     checkIn: new Date("2025-12-22"),
  //     rating: 4.2
  //   },
  //   {
  //     id: 2,
  //     type: "Without AC",
  //     addOn: "None",
  //     foodMenu: "Dosa and idli",
  //     price: 700,
  //     checkIn: new Date("2025-12-22"),
  //     rating: 3.2
  //   },
  //   {
  //     id: 3,
  //     type: "Suite",
  //     addOn: "Catering and Samphane",
  //     foodMenu: "Aleo oleo, Saman with parmachan cheese",
  //     price: 5000,
  //     checkIn: new Date("2025-12-22"),
  //     rating: 2.6
  //   },
  // ]

  getRooms(){
    return this.http.get<Room[]>('/api/rooms')
  }

  addRoom(room: Room){
    return this.http.post<Room[]>('/api/rooms', room).pipe(
      tap((rooms)=>{
        this.roomsSubject$.next(rooms)
      })
    )
    // return this.http.post<Room[]>('/api/rooms', room)
    // return this.http.post<Room[]>('/api/rooms', room).pipe(
    //   map((rooms)=>{
    //     this.getRooms$= this.http.get<Room[]>('/api/rooms').pipe(
    //       shareReplay(1),
    //       catchError((err)=>{
    //         this.error$.next(err.message)
    //         return of([]);
    //       })
    //     );
    //   })
    // )
    // this.roomsSubject.next(rooms)
  }

  updateRoom(room: Room){
    return this.http.put<Room[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom(id: string){
    return this.http.delete<Room[]>(`/api/rooms/${id}`)
  }

  getPhotos(){
    const request= new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      }
    );
    return this.http.request(request)
  }
}
