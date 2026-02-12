import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Tasks } from "./components/tasks/tasks";
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks, FontAwesomeModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task Tracker');
}
