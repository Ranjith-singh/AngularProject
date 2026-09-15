import { AfterViewInit, Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientDetails } from "./patient-details/patient-details";

@Component({
  selector: 'hcare-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements AfterViewInit{
  protected readonly title = signal('healthcare');
  readonly role= signal('Admin');

  @ViewChild('patientDetails', {read: ViewContainerRef}) viewContainerRef?: ViewContainerRef;

  ngAfterViewInit(): void {
    const patientDetailsComponentRef= this.viewContainerRef?.createComponent(PatientDetails);
  }
}
