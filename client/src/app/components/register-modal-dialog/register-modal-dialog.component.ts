import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService} from '../../authentication.service'
import { CustomerService } from '../../services/customer.services'
import { EmailService } from '../../services/email.services';
import { Router } from "@angular/router";
import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";
import { LoginPromptModal } from "../login-prompt-modal/login-prompt-modal.component";
import { UserData } from '../../../app/data/user-data';
import { CustomerData } from '../../../app/data/customer-data';

declare var $: any;


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
    errorMessage = '';
    currentUserPK: number;

    userInfo: UserData = {
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

    constructor(public dialogRegisterRef: MatDialogRef<RegisterModalDialogComponent>,
      private fb:FormBuilder, private auth:AuthenticationService, 
      private custService:CustomerService, private router:Router,
      public dialogLoginRef: MatDialogRef<LoginPromptModal>,
      public emailService:EmailService,
        @Inject(MAT_DIALOG_DATA) public modalData: any){}

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
        State: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
        Zipcode:['', [Validators.required, Validators.min(10000)]],
        Subscribe: [0]
      })

    }

    actionFunction() {        
        this.dialogRegisterRef.close("Yes");
      }
    
    closeModal() {
      this.dialogRegisterRef.close("No");
    }

    get f() { return this.newUserForm.controls; }  

    loadUserDetails(){
      this.userInfo.Username = this.newUserForm.get('username').value
      this.userInfo.Email = this.newUserForm.get('email').value
      this.userInfo.Password = this.newUserForm.get('password').value
      this.userInfo.Role_FK = '1';
    }

    loadCustomerDetails(){
      this.customerDetails.FirstName = this.newUserForm.get('FirstName').value;
      this.customerDetails.LastName = this.newUserForm.get('LastName').value;
      this.customerDetails.PhoneNo = this.newUserForm.get('PhoneNo').value;
      this.customerDetails.Address = this.newUserForm.get('Address').value;
      this.customerDetails.City = this.newUserForm.get('City').value;
      this.customerDetails.State = this.newUserForm.get('State').value;
      this.customerDetails.Zipcode = this.newUserForm.get('Zipcode').value;
      this.customerDetails.Subscribe = this.newUserForm.get('Subscribe').value;
    }

    onSubmit(){
      this.submitted = true;
      if (this.newUserForm.invalid)
        console.log("Invalid")
      else{
        console.log(this.newUserForm)
        this.loadUserDetails();
        this.loadCustomerDetails();
        this.auth.register(this.userInfo).subscribe((res) => {
          if (res.error){
            console.log(res)
            this.errorMessage = "*"+res.error;
            return;
          }
          else{
            // this.userInfo.UserPK = res.UserPK;
            this.customerDetails.UserPK = res.UserPK;
            this.userInfo.UserPK = this.customerDetails.UserPK;
            this.custService.finishRegister(this.customerDetails).subscribe((res) => {
              if (res.error){
                console.log(res)
                this.errorMessage = "*"+res.error;
                return;
              }
              else{
                // this.userInfo.UserPK = res.UserPK;
                this.sendConfirmation();
                this.actionFunction();
              }
            })
          }
          err => {
            console.error(err);
            return;
          }
        })
      }
    }

    sendConfirmation(){        
      console.log(this.userInfo)
      console.log(this.customerDetails)
      this.userInfo.Email = this.newUserForm.get("email").value;
      
      this.emailService.sendRegistrationConfirmationEmail(this.userInfo).subscribe(
          (res) => {
              if(res.error){
                  console.log("fotgot ts file: " + res.error)                                     
              }
              else{                    
                  console.log("Confirmation Email has been sent to " + this.userInfo.Email)
                  // this.closeModal();
              }
          },
          err => {
              console.log(err)
          }
      );
  }
    
}