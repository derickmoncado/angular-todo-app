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
    console.log('Form submitted!');
    console.log(form);

    if (form.invalid) {
      return alert('Form is invalid! Please enter a Todo item.');
    }

    // Adding the todo
    this.dataService.addTodo(new Todo(form.value.text));
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
