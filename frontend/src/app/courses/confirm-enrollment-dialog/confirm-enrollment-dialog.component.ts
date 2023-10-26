import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-enrollment-dialog',
  templateUrl: './confirm-enrollment-dialog.component.html',
  styleUrls: ['./confirm-enrollment-dialog.component.css']
})
export class ConfirmEnrollmentDialogComponent {

  constructor(private dialogRef :MatDialogRef<ConfirmEnrollmentDialogComponent>){}


  closeDialog(){
    this.dialogRef.close(false)
  }
}
