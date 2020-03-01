import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';
import { Router } from '@angular/router'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
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
  userDetails: UserDetails
  NewRole: string = ''
  message = ''
  constructor(private route: ActivatedRoute, private auth: AuthenticationService, 
    private router: Router, public emailService:EmailService, public matDialog: MatDialog) { }

  ngOnInit() {   
    this.route.params.subscribe(val => {
      this.UserPK = val.id
      this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
        this.userDetails = user
        this.editedUserRoleFK = this.userDetails.Role_FK
        console.log(this.editedUserRoleFK)

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
    })
  }

//Configure Modal Dialog
openModalUpdateUserDetail(){ 
  //Configure Modal Dialog
  const dialogConfig = new MatDialogConfig();
  // The user can't close the dialog by clicking outside its body
  dialogConfig.disableClose =true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "200px";
  dialogConfig.width = "350px";
  dialogConfig.data = {
      title: "Update User detail",
      description: "All information is correct?",            
      actionButtonText: "Confirm",            
    }
    // https://material.angular.io/components/dialog/overview
  // https://material.angular.io/components/dialog/overview
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
    this.NewRole = $("#roleSelection :selected").text();
    console.log("RoleFK " + this.NewRole)
    
    if(this.NewRole == "Customer") 
      {this.userDetails.Role_FK = "1"}
    else if(this.NewRole == "Manager")
      {this.userDetails.Role_FK = "2"}
    else
      {this.userDetails.Role_FK = "3"}

    this.auth.updateUserDetail(this.UserPK,this.userDetails).subscribe(response => {
      console.log(response)
      this.message = "User was updated sucessfully"

      const url = "/profile/set-user-role"
      this.router.navigateByUrl(url)
    },
    error => {
      console.log(error);
    })
  }

//Configure Modal Dialog
openModalResetPassword(){ 
  //Configure Modal Dialog
  const dialogConfig = new MatDialogConfig();
  // The user can't close the dialog by clicking outside its body
  dialogConfig.disableClose =true;
  dialogConfig.id = "modal-component";
  dialogConfig.height = "200px";
  dialogConfig.width = "350px";
  dialogConfig.data = {
      title: "Reset Password",
      description: "Are you sure to reset the password?",            
      actionButtonText: "Confirm",            
    }
    // https://material.angular.io/components/dialog/overview
  // https://material.angular.io/components/dialog/overview
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
        //this.errorMessage = "*Reset Email has been sent to " + this.userDetails.Email
        console.log("Reset Email has been sent to " + this.userDetails.Email)                            
    }
    });
  }

  //TO-DO:
  disableUser(){

  }
}
