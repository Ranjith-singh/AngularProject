import { Component, OnInit } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
  title: string= "Task Tracker"
  constructor(){

  }
  ngOnInit(): void {
      
  }
  toggleAddTask(): void {
    console.log("toggle")
  }
}
