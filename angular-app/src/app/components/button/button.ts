import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements OnInit{
  @Input() text: string
  @Input() color: string
  @Output() btnClick= new EventEmitter()
  constructor(){

  }

  ngOnInit(): void{

  }

  onClick(){
    this.btnClick.emit()
  }
}
