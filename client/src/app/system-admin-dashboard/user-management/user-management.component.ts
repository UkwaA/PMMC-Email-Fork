import { Component, OnInit } from '@angular/core';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from 'src/app/components/modal-dialog/modal-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
declare var $: any;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
    p: number;
    listOfUsers: UserData[];
    userRoles:string[]
    searchText: string
    currentUserID: number
    allUsers: UserData[] = []
    activeUsers: UserData[] = []
    inactiveUsers: UserData[] = []
  IsActive: boolean; //temporary variabe to hold the value for deactivate/activate button of user account
    // Dropdown Meny Option
    userStatus: Array<Object> = [
        { id: 0, name: "All Users" },
        { id: 1, name: "Active Users" },
        { id: 2, name: "Inactive Users" }
]
    
  constructor(private auth: AuthenticationService, public matDialog: MatDialog) {}

  ngOnInit() {
    // Add option for the dropdown menu
    this.userStatus.forEach(e => {
        $("#userStatus").append(new Option(e['name'], e['id']));
    });

    this.userRoles = ['Customer', 'Manager','System Admin'];
    this.auth.getAllUser().subscribe((result) => {
      this.listOfUsers = result;
      this.allUsers = result;
      this.listOfUsers.forEach(e =>{
          if(e.IsActive){
              this.activeUsers.push(e);
          }
          else{
              this.inactiveUsers.push(e);
          }
      })        
    })

    this.currentUserID = this.auth.getUserDetails().UserPK
  }

  clearSearch() {
    this.searchText = "";
}

// Catch the event dropdown menu
selectChangeHandler(event: any) {
    let choice = event.target.value;
    // Update the data of table
   switch(choice) {
        case '0':
            this.listOfUsers = this.allUsers;
            break;
        case '1':
            this.listOfUsers = this.activeUsers;
            break;
        case '2':
            this.listOfUsers = this.inactiveUsers;
            break;
   }
}


  //open Modal when switching Activate/Deactivate button
  openModalSwitch(userPK: number, status:boolean){
    this.IsActive = status;
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose =true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "350px";
    dialogConfig.autoFocus = false;
    if (!this.IsActive){
        dialogConfig.data = {
            title: "Activate Account",
            description: "This account is deactivated. Are you sure to activate this account?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"
        }
    }
    else {
        dialogConfig.data = {
            title: "Deactivate Account",
            description: "This account is actived. Are you sure to deactivate this account?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"
        }
    }
      
    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result =>{
        if(result == "Yes"){
            //deactivate or activate the account here
            if (this.IsActive){ 
                //deactivate account here
                this.auth.setUserActiveStatus(userPK, false)
                    .subscribe((res) => {
                        window.location.reload();
                    })

            }
            else {
                //activate account here
                this.auth.setUserActiveStatus(userPK, true)
                    .subscribe((res) => {
                        window.location.reload();
                    })
            }
            //switch the button
            this.IsActive = !this.IsActive;
        }
        else{
            //otherwise, do nothing            
        }
    })
}
}


