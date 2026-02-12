import { Component , OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { TaskItem } from "../task-item/task-item";
import { TaskService } from '../../services/task';
import { Task } from '../../Task';
import { AddItem } from "../add-item/add-item";

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItem, AddItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit{
  tasks: Task[]= []
  constructor(private taskService: TaskService){
    
  }
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks= tasks
    })
  }
  removeTaskFromList(task: Task){
    // console.log(task)
    this.taskService.removeTask(task).subscribe(
      (task)=>(this.tasks=this.tasks.filter((t)=> t.id !== task.id))
    );
    this.tasks= this.tasks.filter((t)=> t.id !== task.id)
  }

  toggleTaskRemainder(task: Task){
    task.reminder= !task.reminder;
    this.taskService.updateTaskRemainder(task).subscribe();
  }
}
