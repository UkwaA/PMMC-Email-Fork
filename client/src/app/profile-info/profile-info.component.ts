import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
  })

  export class ProfileInfo implements OnInit {
    submitted = false;
    
    ngOnInit() {}

    onSubmit(){
      this.submitted = true;
    }
  }