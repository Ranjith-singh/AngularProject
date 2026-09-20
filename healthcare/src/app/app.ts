import { AfterViewInit, Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientDetails } from "./patient-details/patient-details";
import { InitService } from './init/init-service';
import { NavComponent } from './navigation/nav/nav.component';

@Component({
  selector: 'hcare-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit{
  protected readonly title = signal('healthcare');
  readonly role= signal('Admin');

  @ViewChild('patientDetails', {read: ViewContainerRef}) viewContainerRef?: ViewContainerRef;

  constructor(private initService: InitService){
    console.log(this.initService.config);
  }

  ngAfterViewInit(): void {
    const patientDetailsComponentRef= this.viewContainerRef?.createComponent(PatientDetails);
  }
}
