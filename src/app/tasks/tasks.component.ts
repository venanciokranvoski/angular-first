import { Component, Input } from '@angular/core';
import { TasksUsersComponent } from "./tasks/task.users.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TasksUsersComponent, NewTaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;


  constructor(private taskService: TaskService){}


  get selectedTaskUser(){
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


}
