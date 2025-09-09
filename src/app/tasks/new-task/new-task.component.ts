import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData} from '../tasks/task.model';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitlle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService = inject(TaskService)


  onCancel(){
    this.close.emit();
  }


  onSubmitForm(){
    this.taskService.addTask(
      {
      title: this.enteredTitlle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
      this.close.emit();
  }


}
