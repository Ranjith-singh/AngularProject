import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  text: string;
  day: string;
  reminder: boolean= false;

  onSubmit(){
    if(!this.text || !this.day){
      alert("please enter task and day")
    }
  }
}
