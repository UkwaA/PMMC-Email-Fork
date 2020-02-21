import { Component, OnInit } from '@angular/core';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
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
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {      
      this.userRoles = ['Customer', 'Manager','System Admin'];
      this.auth.getAllUser().subscribe((result) => {
        console.log(result);
        this.listOfUsers = result;        
      })

      this.currentUserID = this.auth.getUserDetails().UserPK
   }
  }


