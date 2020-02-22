import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl(''),
    middleInitials: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')});
  constructor() { }

  ngOnInit() {
    console.log(this.customerForm.value);
  }

  toggleDisabled(): any {
    console.log("This button works");
    console.log(this.customerForm.value);
    // let submitButton = <HTMLInputElement> document.getElementById('submit_btn');
    // submitButton.disabled = !submitButton.disabled;
    // console.warn(testButton.disabled);
  }
}
