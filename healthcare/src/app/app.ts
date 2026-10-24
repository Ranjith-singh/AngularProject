import { AfterViewInit, Component, Inject, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PatientDetails } from "./features/patient-details/patient-details";
import { InitService } from './appService/init/init-service';
import { NavComponent } from './features/navigation/nav/nav.component';
import { ConfigService } from './appService/config/config.service';
import { Config } from './appService/config/config';
import { ConfigInterface } from './appService/config/config.interface';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hcare-root',
  imports: [NavComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, AfterViewInit{
  protected readonly title = signal('healthcare');
  readonly role= signal('Admin');

  @ViewChild('patientDetails', {read: ViewContainerRef}) viewContainerRef?: ViewContainerRef;

  constructor(
    private initService: InitService,
    private configService: ConfigService,
    @Inject(Config) private config: ConfigInterface,
    private router: Router
  ){
    console.log(this.config);
    console.log(this.initService.config);
  }

  ngOnInit() {
    // this.router.events.subscribe((events)=> {
    //   console.log(events);
    // });
    this.router.events.pipe(
      filter((event)=> (event.type == 0 || event.type == 1))
    )
    .subscribe((event)=> {
      if(event.type == 0) {
        console.log("Navigation Start");
      }
      else {
        console.log("Navigation End");
      }
    })
  }

  ngAfterViewInit(): void {
    // const patientDetailsComponentRef= this.viewContainerRef?.createComponent(PatientDetails);
  }
}
