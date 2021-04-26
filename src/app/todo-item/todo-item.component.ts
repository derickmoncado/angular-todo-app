import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Todo } from '../shared/todo.model';
import tippy from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit, AfterViewInit {
  constructor() {}

  // Properties
  @Input() public todo: Todo | undefined;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('editBtn') editBtnElRef: ElementRef<HTMLElement> | undefined;

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

  ngAfterViewInit(): void {
    tippy(this.editBtnElRef.nativeElement, { content: 'Edit Todo' });
  }

  ngOnInit(): void {}
}
