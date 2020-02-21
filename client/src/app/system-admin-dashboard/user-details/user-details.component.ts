import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserData} from '../../data/user-data';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { Router } from '@angular/router'
declare var $: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  // userRoles = [
  //   {
  //     role: 'Customer',
  //     value: '1'
  //   },
  //   {      
  //     role: 'Manager',
  //     value: '2'
  //   },
  //   {      
  //     role: 'System Admin',
  //     value: '3'
  //   },
  // ]
  userRoles:string[]
  editedUserRoleFK:string
  UserPK: number
  userDetails: UserDetails
  NewRole: string = ''
  message = ''
  constructor(private route: ActivatedRoute, private auth: AuthenticationService, private router: Router) { }

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

      const url = "/set-user-role"
      this.router.navigateByUrl(url)
    },
    error => {
      console.log(error);
    })
  }

  //TO-DO:
  removeUser(){

  }

  //Send reset password email
  
}
