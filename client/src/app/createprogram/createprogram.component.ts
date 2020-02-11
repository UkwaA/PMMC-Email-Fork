import { Component } from '@angular/core'
import { AuthenticationService, UserDetails} from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './createprogram.component.html',
    styleUrls: ['./createprogram.component.css']
})

export class CreateProgramComponent {
    user: UserDetails
    programData = {
        program_pk: 0,
        name: '',
        description: '',
        createdby: '',
        imgdata: ''
    }

    constructor(private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
      this.user = this.auth.getUserDetails();
    }

    create() {

    }
}