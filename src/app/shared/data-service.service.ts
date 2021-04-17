import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Properties
  public todos: Todo[] = [
    { text: 'test data 1', completed: true },
    { text: 'test data 2', completed: false },
    { text: 'test data 3', completed: true },
    { text: 'test data 4', completed: false },
    { text: 'test data 5', completed: false },
    { text: 'test data 6', completed: true },
  ];

  constructor() {}

  // Get all todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Add todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  // Update todo
  updateTodo(index: number, updatedTodo: Todo): void {
    this.todos[index] = updatedTodo;
  }

  // Delete todo
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
