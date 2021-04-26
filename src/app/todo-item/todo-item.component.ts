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
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  // Emits click even up to parent component
  onTodoClicked(): void {
    this.todoClicked.emit();
  }

  // On Edit click
  onEditClicked(): void {
    this.editClicked.emit();
  }

  // On delete click
  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }

  ngOnInit(): void {}
}
