import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from '../../../app/data/user-data';
import { CustomerData } from '../../../app/data/customer-data';

@Component({
    selector: 'register-modal-dialog',
    templateUrl: './register-modal-dialog.component.html',
    styleUrls: ['../modal-dialog/modal-dialog.component.css']
})

export class RegisterModalDialogComponent implements OnInit{
    newUserForm: FormGroup
    modalHeader: String
    modalContent: String
    submitted = false;

    userDetails: UserData = {
      UserPK: 0,
      Username: '',
      Password: '',
      Role_FK: '',
      Email: '',      
      IsActive: true,
      CreatedDate: ''
  }

  customerDetails:CustomerData = {
    UserPK: 0,
    FirstName: '',
    LastName: '',
    PhoneNo: '',
    Address: '',
    City: '',
    State: '',
    Zipcode: '',
    Subscribe: 0,
  }

    constructor(public dialogRef: MatDialogRef<RegisterModalDialogComponent>,
      private fb:FormBuilder,
        @Inject(MAT_DIALOG_DATA) private modalData: any){}

    ngOnInit(){
      this.newUserForm = this.fb.group({    
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        PhoneNo: ['', [Validators.required, Validators.min(1000000000)]],
        Address: ['', Validators.required],
        City: ['', Validators.required],
        State: ['', Validators.required],
        Zipcode:['', Validators.required],
        Subscribe: [0]
      })
    }

    actionFunction() {        
        //this.closeModal();
        this.dialogRef.close("Yes");
      }
    
    closeModal() {
      this.dialogRef.close("No");
    }

    get f() { return this.newUserForm.controls; }  

    onSubmit(){
      this.submitted = true;
      if (this.newUserForm.invalid)
        console.log("Invalid")
      console.log(this.newUserForm)
    }
    
}