import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from "./rooms/rooms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hotel Inventory');

  hotelName: string= "Salamat"
  dish: string= "shawarma"
  user: string= 'admin'
  order: boolean= true

  toggle(): void{
    this.order= !this.order
  }
}
