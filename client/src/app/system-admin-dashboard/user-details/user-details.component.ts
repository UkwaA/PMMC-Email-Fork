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
  userRoles = ['Customer','Manager','System Admin']
  UserPK: number
  userDetails: UserDetails
  NewRole: string = ''
  message = ''
  constructor(private route: ActivatedRoute, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.userRoles.forEach(e => {
      $("#roleSelection").append(new Option(e, e));  
    });

    this.route.params.subscribe(val => {
      this.UserPK = val.id
      this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
        this.userDetails = user
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
