import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService, UserDetails} from '../authentication.service';
import { UserData } from '../data/user-data';


@Component({
    selector: 'account-setting',
    templateUrl: './account-setting.component.html',
    styleUrls: ['./account-setting.component.css']
  })
  export class AccountSetting implements OnInit {
    UserPK: number
    userDetails: UserData = {
      UserPK: 0,
      Username: '',
      Password: '',
      Role_FK: '',
      Email: '',      
      IsActive: false,
      CreatedDate: ''      
  }
   
    constructor(private route: ActivatedRoute, private auth: AuthenticationService) { }
    ngOnInit() {
        this.route.params.subscribe(val => {
            this.UserPK = val.id
            this.auth.getUserDetailsByID(this.UserPK).subscribe(user => {
              this.userDetails = user;
            })
        })
    }
  }