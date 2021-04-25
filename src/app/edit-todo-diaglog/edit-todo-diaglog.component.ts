import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-diaglog',
  templateUrl: './edit-todo-diaglog.component.html',
  styleUrls: ['./edit-todo-diaglog.component.scss'],
})
export class EditTodoDiaglogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTodoDiaglogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  // Close the dialog
  close(): void {
    this.dialogRef.close();
  }

  // On form submit
  onFormSubmit(form: NgForm): void {}

  ngOnInit(): void {}
}
