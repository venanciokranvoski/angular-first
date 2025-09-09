import { Injectable } from '@angular/core';
import { type NewTaskData} from './task.model'

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Learn all the basic and advanced features of angular & how aply them.',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2025-08-31'
            },
            {
            id: 't2',
            userId: 'u2',
            title: 'Build a first prototype of the online shop website, for web site of industry',
            summary: 'Build a first Angular',
            dueDate: '2025-09-22'
            },
            {
            id: 't3',
            userId: 'u3',
            title: 'prepare issue template',
            summary: 'Build a first and create website with security hardcore',
            dueDate: '2025-09-11'
        },
    ];


    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string){
        const fetchlocalStorageTask = localStorage.getItem('tasks');
        const parseTasks = fetchlocalStorageTask ? JSON.parse(fetchlocalStorageTask) : []; 
        return parseTasks.filter((task: any) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
        })
        this.saveTaskLocal();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTaskLocal();
    }

    private saveTaskLocal(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}