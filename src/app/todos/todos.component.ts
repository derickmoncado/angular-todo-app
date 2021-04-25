import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data-service.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDiaglogComponent } from '../edit-todo-diaglog/edit-todo-diaglog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  // Properties
  public todos: Todo[] = [];
  public showValidationErrors: boolean | undefined;

  // Form submit
  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      this.showValidationErrors = true;
    } else {
      this.dataService.addTodo(new Todo(form.value.text));
      this.showValidationErrors = false;
      form.reset();
    }
  }

  // Toggles todo's completed value
  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  // For editing a todo
  editTodo(todo: Todo): void {
    // ..we need
    // - index of todo
    // - user needs to enter new updated information

    const index = this.todos.indexOf(todo);

    // Opens dialog
    let dialogRef = this.dialog.open(EditTodoDiaglogComponent, {
      width: '700px',
    });

    // this.dataService.updateTodo();
  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
}
