import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm = new FormGroup({ // This the the declaration and initialisation of the contact form
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', Validators.required),
  });

  sent = false;

  constructor() { }

  sendMessage() {
    localStorage.setItem('name', this.myForm.controls.name.value);
    this.myForm.reset();
    this.sent = true; // This bool triggers the sent message to appear on the screen
  }

  ngOnInit() {
  }
}
