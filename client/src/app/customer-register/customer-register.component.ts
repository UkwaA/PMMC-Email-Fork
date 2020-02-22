import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleInitials: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phoneNum: new FormControl('', Validators.minLength(9)),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(6)),
    confirmed_password: new FormControl('', Validators.minLength(6))
  });
  
    constructor() { }

  ngOnInit() {
    console.log(this.customerForm.value);
  }

  checkSubmission(): any {
    console.log("This button works");
    console.log(this.customerForm.value);
    return this.customerForm.status;
    // let submitButton = <HTMLInputElement> document.getElementById('submit_btn');
    // submitButton.disabled = !submitButton.disabled;
    // console.warn(testButton.disabled);
  }

  passwordsMatch(): any{
    console.log("Checking passowrds");
    if(this.customerForm.get('password').value!= '' && this.customerForm.get('confirmed_password').value!= ''){
      console.log("is this working?");
      console.log(this.customerForm.get('password').value == this.customerForm.get('confirmed_password').value)
      return this.customerForm.get('password').value == this.customerForm.get('confirmed_password').value;
    }
  }
}
