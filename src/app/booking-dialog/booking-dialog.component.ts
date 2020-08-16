import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent {
  confirmed = false; // This variable is set to true when the first form is completed,
  // this then triggers the display of the confirmation screen.
  today = new Date(); // This date is used for validation of the dob and start date

  myForm = new FormGroup({ // This is where I am declaring and initialising my form for the modal
    firstname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    lastname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    collectOrDeliver: new FormControl('', Validators.required),
    deliveryAddress: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<BookingDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
