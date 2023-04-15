import { Injectable } from '@angular/core';
import { Task } from '../todoform/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todolist : Task[] = []
  constructor() {

  }

  getList() : Task[]{
    return this.todolist;
  }
  saveData(data: Task){
    this.todolist.push(data);
  }
}
