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
  constructor(private dataService: DataService) {}

  // Properties
  public todos: Todo[] = [];
  public showValidationErrors: boolean | undefined;

  // Form submit
  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return (this.showValidationErrors = true);
    }

    this.dataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    return form.reset();
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
