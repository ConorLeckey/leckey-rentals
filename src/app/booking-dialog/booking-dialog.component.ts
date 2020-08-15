import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {
  confirmed = false;

  myForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    lastname: new FormControl('', Validators.required),
    collectOrDeliver: new FormControl('', Validators.required),
    deliveryAddress: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<BookingDialogComponent>) {
    console.log(data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
