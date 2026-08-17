import { AfterViewInit, 
  ChangeDetectionStrategy, 
  Component, 
  DoCheck, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnInit, 
  Output, 
  SimpleChanges, 
  ViewChild,
  OnDestroy, 
  SkipSelf} from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
import { Header } from "../../header/header";
import { PatientDetailsService } from '../service/patient-details-service';

@Component({
  selector: 'hcare-rooms-detail',
  imports: [CommonModule, Header],
  templateUrl: './rooms-detail.html',
  styleUrls: ['./rooms-detail.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PatientDetailsService],
})
export class RoomsDetail implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input({required: true}) hospitalRoomsDetails?: RoomList[];
  @Input() title?: string;
  @Output() selectedRoom= new EventEmitter<RoomList>();
  @ViewChild(Header, {static: true}) headerComponent?: Header;
  
  constructor(@SkipSelf() private patientDetailsService: PatientDetailsService) {

}

  ngOnInit() {
    console.log(this.headerComponent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']) {
      this.title= this.title?.toUpperCase();
    }
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent?.title.set('Hilton Hotel');
  }

  // Used when this event is handled by none
  // ngDoCheck(): void {
  //   console.log("Ng DoCheck is called")
  // }

  htmlrenderer() {
    console.log("Html getting generated")
  }

  ngOnDestroy(): void {
    console.log("Rooms Detail component is destroyed")
  }
}
