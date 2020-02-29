import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService, TokenPayload2 } from '../authentication.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  customerInfoForm:FormGroup;
  submitted = false;
  errorMessage = '';

    credentials: TokenPayload2 = {
      CustomerPK: 0,
      FirstName: '',
      LastName: '',
      PhoneNo:'',
      Address:'',
      Address2:'',
      City:'',
      State:'',
      ZipCode:'',
      Subscribe: 0
    }

    
  
    constructor(private auth: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNum: ['', [Validators.required, Validators.minLength(9)]],
    address_street: ['', Validators.required],
    address_unit: [''],
    address_city: ['', Validators.required],
    address_state: ['', [Validators.required, Validators.minLength(2)]],
    address_zipcode: ['', [Validators.required, Validators.minLength(5)]],
    subscribe: [0] 
    
     })
    console.log(this.customerInfoForm.value);
  }

  checkSubmission(): any {
    this.submitted = true;
    console.log("This button works");
    console.log(this.customerInfoForm.get('firstName').valid)
    console.log(this.customerInfoForm.value);
    return this.customerInfoForm.status;
  }

  get f() { return this.customerInfoForm.controls; }

  passwordsMatch(): any{
    console.log("Checking passowrds");
    if(this.customerInfoForm.get('password').value!= '' && this.customerInfoForm.get('confirmed_password').value!= ''){
      console.log("is this working?");
      console.log(this.customerInfoForm.get('password').value == this.customerInfoForm.get('confirmed_password').value)
      return this.customerInfoForm.get('password').value == this.customerInfoForm.get('confirmed_password').value;
    }
  }

  checkBoxClicked():any{
    console.log("Checkbox Clicked");
    if (this.customerInfoForm.get('subscribe').value == 0)
      this.customerInfoForm.get('subscribe').setValue(1)
    else
      this.customerInfoForm.get('subscribe').setValue(0)
    this.credentials.Subscribe = this.customerInfoForm.get('subscribe').value
    console.log(this.customerInfoForm.get('subscribe').value);
  }

  finishregister() {
    this.submitted = true;
    console.log("Form Submitted")
    if (this.customerInfoForm.invalid) {
        console.log("Form Invalid")
        return;
    }

    
    console.log(this.customerInfoForm.value);

    this.auth.finishregister(this.credentials).subscribe((res) => {
        if(res.error)
        {
            console.log("Error in the finish register")
            console.log(res)
            this.errorMessage = "*" + res.error
            return
        }
        else
            this.router.navigateByUrl("/profile");            
    },
        err => {
            console.log("Err section")
            console.error(err);
        }
    );  
}
}
