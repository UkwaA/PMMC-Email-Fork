import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserDetails} from '../../authentication.service'

@Component({
    templateUrl: './change-current-password.component.html',
    styleUrls: ['./change-current-password.component.css']
})

export class ChangeCurrentPasswordComponent{
    currentPassword: string
    newPassword: string  

    constructor(private fb: FormBuilder, private auth: AuthenticationService, 
        private route:ActivatedRoute, private router: Router ){            
    }

    ngOnInit(){

    }
}