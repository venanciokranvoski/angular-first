import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { SharedCardComponent } from "../../shared-card/shared-card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-task-users',
  imports: [SharedCardComponent, DatePipe],
  templateUrl: './task.users.component.html',
  styleUrl: './task.users.component.css'
})
export class TasksUsersComponent {
  @Input({required: true}) task!: Task
  @Output() complete = new EventEmitter<string>();
  private taskRemoveItem = inject(TaskService)


  onCompleteTask(){
    this.taskRemoveItem.removeTask(this.task.id)
  }
}
