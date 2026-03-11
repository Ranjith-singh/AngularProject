import { Component } from '@angular/core';
import { Config } from '../service/config';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true
})
export class Booking {
  constructor(private configService: Config){

  }
}
