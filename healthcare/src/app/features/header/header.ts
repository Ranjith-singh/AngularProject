import { Component, signal } from '@angular/core';

@Component({
  selector: 'hcare-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title= signal<string>('');
}
