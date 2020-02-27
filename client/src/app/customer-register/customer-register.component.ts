import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  submitted = false;
  customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNum: new FormControl('', Validators.minLength(9)),
    address_street: new FormControl('', Validators.required),
    address_unit: new FormControl(''),
    address_city: new FormControl('', Validators.required),
    address_state: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
    address_zipcode: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    
  
    constructor() { }

  ngOnInit() {
    console.log(this.customerForm.value);
  }

  checkSubmission(): any {
    this.submitted = true;
    console.log("This button works");
    console.log(this.customerForm.get('firstName').valid)
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
