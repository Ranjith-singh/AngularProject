import { AfterViewInit, Component, ElementRef, QueryList, signal, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Rooms } from "./rooms/rooms";
import { Container } from "./container/container";
import { Employee } from "./employee/employee";
import { APP_CONFIG, APP_CONFIG_SERVICE } from './appConfig/appconfig.service';
import { RoomService } from './rooms/service/room-service';
import { InitService } from './init-service';
import { NavigationComponent } from "./navigation/navigation.component";
import { FormsModule } from '@angular/forms';
import { Config } from './service/config';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,

    // Rooms,
    // Cause this is lazy loaded during rooms routes

    // Container,
    // Employee,
    // RouterLinkWithHref,
    NavigationComponent,
    FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    {
      provide: APP_CONFIG_SERVICE,
      useValue: APP_CONFIG
    },
    RoomService,
    // Config
  ]
})
export class App implements AfterViewInit {
  protected readonly title = signal('Hotel Inventory');

  @ViewChild('user', { read: ViewContainerRef }) mainTemplate!: ViewContainerRef
  @ViewChild('div') name!: ElementRef
  @ViewChildren('div') names!: QueryList<ElementRef>

  hotelName: string = "Salamat"
  dish: string = "shawarma"
  user: string = 'admin'
  order: boolean = true

  constructor(
    private initService: InitService,
    private config: Config
  ){
    console.log(this.initService.config);
  }

  toggle(): void {
    this.order = !this.order
  }
  ngAfterViewInit(): void {
    this.mainTemplate?.createComponent(Rooms)
    this.name.nativeElement.innerHTML = "<h3>Surprise Mother Father</h3>"
    this.names.last.nativeElement.innerHTML = "<h6>Wow how did you..<h6>"
  }
}
