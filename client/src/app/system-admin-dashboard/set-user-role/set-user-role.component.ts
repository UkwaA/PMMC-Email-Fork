import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-set-user-role',
  templateUrl: './set-user-role.component.html',
  styleUrls: ['./set-user-role.component.css']
})
export class SetUserRoleComponent implements OnInit {
  listOfUsers: any
  userRoles:string[]
  constructor() { }

  ngOnInit() {      
      this.userRoles = ['Customer', 'Manager','System Admin'];
      this.listOfUsers = [{
        'username': "huy",
        'id' : 17,
        'role': 'Customer'
      },
      {   'username': "b",
        'id' : 18,
        'role': 'Customer'
      },
      {   'username': "hoang",
        'id' : 19,
        'role': 'System Admin'
      }]
      console.log(this.userRoles);
      console.log(this.listOfUsers[0].username);
   }
  }


