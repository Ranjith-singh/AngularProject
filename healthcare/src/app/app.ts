import { AfterViewInit, Component, Inject, signal, ViewChild, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { PatientDetails } from "./features/patient-details/patient-details";
import { InitService } from './appService/init/init-service';
import { NavComponent } from './features/navigation/nav/nav.component';
import { ConfigService } from './appService/config/config.service';
import { Config } from './appService/config/config';
import { ConfigInterface } from './appService/config/config.interface';

@Component({
  selector: 'hcare-root',
  imports: [NavComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit{
  protected readonly title = signal('healthcare');
  readonly role= signal('Admin');

  @ViewChild('patientDetails', {read: ViewContainerRef}) viewContainerRef?: ViewContainerRef;

  constructor(
    private initService: InitService,
    private configService: ConfigService,
    @Inject(Config) private config: ConfigInterface
  ){
    console.log(this.config);
    console.log(this.initService.config);
  }

  ngAfterViewInit(): void {
    // const patientDetailsComponentRef= this.viewContainerRef?.createComponent(PatientDetails);
  }
}
