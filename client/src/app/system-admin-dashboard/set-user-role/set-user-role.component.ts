import { Component, OnInit } from '@angular/core';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from 'src/app/components/modal-dialog/modal-dialog.component';
declare var $: any;

@Component({
  selector: 'app-set-user-role',
  templateUrl: './set-user-role.component.html',
  styleUrls: ['./set-user-role.component.css']
})
export class SetUserRoleComponent {
  listOfUsers: UserDetails;
  userRoles:string[]
  currentUserID: number
  isDisabled= true; //temporary variabe to hold the value for deactivate/activate button of user account

  constructor(private auth: AuthenticationService, public matDialog: MatDialog) {}

  ngOnInit() {      
    this.userRoles = ['Customer', 'Manager','System Admin'];
    this.auth.getAllUser().subscribe((result) => {
      this.listOfUsers = result;        
    })

    this.currentUserID = this.auth.getUserDetails().UserPK
  }

  //open Modal when switching Activate/Deactivate button
  openModalSwitch(){
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose =true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "350px";
    if (this.isDisabled){
        dialogConfig.data = {
            title: "Activate Account",
            description: "This account is deactivated. Are you sure to activate this account?",            
            actionButtonText: "Confirm",   
            numberOfButton: "1"         
        }
    }
    else {
        dialogConfig.data = {
            title: "Deactivate Account",
            description: "This account is actived. Are you sure to deactivate this activate?",            
            actionButtonText: "Confirm",   
            numberOfButton: "1"         
        }
    }
        // https://material.angular.io/components/dialog/overview
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result =>{
        if(result == "Yes"){
            //deactivate or activate the account here
            if (this.isDisabled){ 
                //activate account here

            }
            else {
                //deactivate account here

            }
            //switch the button
            this.isDisabled = !this.isDisabled;
        }
        else{
            //otherwise, do nothing            
        }
    })
}
}


