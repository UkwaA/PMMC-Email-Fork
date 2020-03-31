import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';
import { Router } from '@angular/router'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerData } from 'src/app/data/customer-data';
import { CustomerService } from 'src/app/services/customer.services';
import { AppConstants } from '../../constants';

declare var $: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {  
  userRoles:string[]
  editedUserRoleFK:string
  UserPK: number  
  NewRole: string = ''
  message = ''
  userDetailForm: FormGroup
  submitted = false
  subscribeChecked: boolean

  userDetails: UserData = {
      UserPK: 0,
      Username: '',
      Password: '',
      Role_FK: '',
      Email: '',      
      IsActive: false,
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

  constructor(private route: ActivatedRoute, private auth: AuthenticationService,private fb: FormBuilder, 
    private router: Router, public emailService:EmailService, public matDialog: MatDialog, private customer: CustomerService,) { }

  ngOnInit() {
    this.userDetailForm = this.fb.group({    
      username: [],
      email: ['', [Validators.required, Validators.email]],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', [Validators.required, Validators.maxLength(2)]],
      Zipcode:['', Validators.required],
      Subscribe: []
    })
    
    
    this.route.params.subscribe(val => {

      this.UserPK = val.id
      this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
        this.userDetails = user
        this.editedUserRoleFK = this.userDetails.Role_FK        

        if(this.editedUserRoleFK == "1")
          {this.userRoles = ['Customer','Manager','System Admin']}
        else if(this.editedUserRoleFK == "2")
          this.userRoles = ['Manager','System Admin','Customer']
        else
          this.userRoles = ['System Admin','Customer','Manager']

        this.userRoles.forEach(e => {
          $("#roleSelection").append(new Option(e, e));  
        });
      })

      this.customer.getCustomerInfoByID(this.UserPK).subscribe(cus =>{
        this.customerDetails = cus          
        if(cus.Subscribe == 0){
          this.subscribeChecked = false
        }            
        else{
          this.subscribeChecked = true
        }
          
      })
    })
  }

  get f() { return this.userDetailForm.controls; }

//Configure Modal Dialog
openModalUpdateUserDetail(){   
  //Form validation
  this.submitted = true;
  if (this.userDetailForm.invalid) {
    return;
  }
  
  //Configure Modal Dialog
  const dialogConfig = new MatDialogConfig();
  // The user can't close the dialog by clicking outside its body
  dialogConfig.disableClose =true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "auto";
  dialogConfig.maxHeight = "500px";
  dialogConfig.width = "350px";
  dialogConfig.autoFocus = false;
  dialogConfig.data = {
      title: "Update User detail",
      description: "All information is correct?",            
      actionButtonText: "Confirm",   
      numberOfButton: "2"         
    }
  const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
  modalDialog.afterClosed().subscribe(result =>{
      if(result == "Yes"){
          //call register function                
          this.updateUserDetail()          
      }
      else{
          console.log("stop")                
      }
  })
}

  updateUserDetail(){
    //Get new role selected info
    this.NewRole = $("#roleSelection :selected").text();   
    
    //Get new Role info
    if(this.NewRole == "Customer") 
      {this.userDetails.Role_FK = "1"}
    else if(this.NewRole == "Manager")
      {this.userDetails.Role_FK = "2"}
    else
      {this.userDetails.Role_FK = "3"}

    //Get subscribe checkbox info
    if(this.subscribeChecked){
      this.customerDetails.Subscribe = 1
    }
    else{
      this.customerDetails.Subscribe = 0
    }    

    //Update User info
    this.auth.updateUserDetail(this.UserPK,this.userDetails).subscribe(response => {
      console.log(response)
      this.message = "User was updated sucessfully"
      this.router.navigateByUrl("/profile/user-management")
    },
    error => {
      console.log(error);
    })

    //Update Customer info
    this.customer.updateCustomerInfo(this.UserPK, this.customerDetails).subscribe(res => {
      console.log(res.message)      
    }),
    error=>{
      console.log(error)
    }
  }

//Configure Modal Dialog
openModalResetPassword(){ 
  //Configure Modal Dialog
  const dialogConfig = new MatDialogConfig();

  // The user can't close the dialog by clicking outside its body
  dialogConfig.disableClose =true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "auto";
  dialogConfig.maxHeight = "500px";
  dialogConfig.width = "350px";
  dialogConfig.autoFocus = false;
  dialogConfig.data = {
      title: "Reset Password",
      description: "Are you sure to reset the password?",            
      actionButtonText: "Confirm",   
      numberOfButton: "2"         
    }
  const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
  modalDialog.afterClosed().subscribe(result =>{
      if(result == "Yes"){
          //call register function                
          this.resetUserPassword()
      }
      else{
          console.log("stop")                
      }
  })
}

  resetUserPassword(){
    this.emailService.sendResetPasswordEmail(this.userDetails).subscribe((res) => {
      if(res.error){
        console.log("user-detail-ts file error: " + res.error)        
    }
    else{        
        console.log("Reset Email has been sent to " + this.userDetails.Email)                            
    }
    });
  }
}
