import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // Properties
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  // Form submit
  onFormSubmit(form: NgForm): void {
    console.log('form submitted');
    console.log(form);
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
