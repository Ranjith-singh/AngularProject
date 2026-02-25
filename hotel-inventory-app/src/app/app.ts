import { AfterViewInit, Component, ElementRef, QueryList, signal, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Rooms } from "./rooms/rooms";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Rooms, Container, Employee],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit{
  protected readonly title = signal('Hotel Inventory');

  @ViewChild('user', {read: ViewContainerRef}) mainTemplate!: ViewContainerRef
  @ViewChild('div') name!: ElementRef
  @ViewChildren('div') names!: QueryList<ElementRef>

  hotelName: string= "Salamat"
  dish: string= "shawarma"
  user: string= 'admin'
  order: boolean= true

  toggle(): void{
    this.order= !this.order
  }
  ngAfterViewInit(): void {
      this.mainTemplate?.createComponent(Rooms)
      this.name.nativeElement.innerHTML= "<h3>Surprise Mother Father</h3>"
      this.names.last.nativeElement.innerHTML= "<h6>Wow how did you..<h6>"
  }
}
