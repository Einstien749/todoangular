import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Task } from './task';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit, OnDestroy {
  show : string = "no";
  latesttask : Task = {task: "", taskdate: "", description: ""};
  todolist : Task[] = [];
  added : boolean = false;
  constructor(private services: TodoService) {
    
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.show = "yes";
    }, 500);
    
  }
  ngOnDestroy(): void{
    this.show = "no";
  }
  submit(task: string, taskdate: string, description: string) : void {
    if(task === "" || taskdate === "" || description === ""){

    }
    else{
      this.todolist.push({task: task, taskdate: taskdate, description: description});
      this.latesttask.task = task;
      this.latesttask.taskdate = taskdate;
      this.latesttask.description = description;
      this.services.saveData(this.latesttask);
      this.added = true;
    }
    setTimeout(() => {
      this.added = false;
    }, 2000);
  }
}
