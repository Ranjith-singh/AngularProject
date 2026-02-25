import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-container',
  imports: [CommonModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container implements AfterContentInit{
  @ContentChild(Employee) employee!: Employee

  ngAfterContentInit(): void {
      this.employee.name= "Deloitte"
  }
}
