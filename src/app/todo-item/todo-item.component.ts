import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  // Properties
  @Input() public todo: Todo | undefined;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();

  // Toggling the todo
  onTodoClicked(): void {
    this.todoClicked.emit();
  }

  ngOnInit(): void {}
}
