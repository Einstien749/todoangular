import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Task } from '../todoform/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist : Task[] = [];
  constructor(private services: TodoService) {
    this.todolist = this.services.getList();
    console.log(this.todolist)
  }
  ngOnInit(): void {

  }
}
