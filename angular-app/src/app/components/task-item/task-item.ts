import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgStyle, NgClass } from "@angular/common";

@Component({
  selector: 'app-task-item',
  imports: [FaIconComponent, NgStyle, NgClass],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task: Task
  @Output() onDeleteTask: EventEmitter<Task>= new EventEmitter();
  @Output() onToggleRemainder: EventEmitter<Task>= new EventEmitter();
  faTimes= faTimes

  onDelete(task: Task){
    this.onDeleteTask.emit(task)
  }

  toggleRemainder(task: Task){
    // console.log(task.reminder)
    this.onToggleRemainder.emit(task)
  }

}
