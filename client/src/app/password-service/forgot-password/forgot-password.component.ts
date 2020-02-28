import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent{
    myForm: FormGroup
    errorMessage = ''
    submitted = false
    userInfo = {
        UserPK: '',
        Username: '',
        Email: '',
        resetPasswordToken: ''
    }

    constructor(private fb: FormBuilder, private auth: AuthenticationService, public emailService:EmailService){}

    faEnvelope = faEnvelope;

    ngOnInit(){
        this.myForm = this.fb.group({            
            email: ['', [
                Validators.required,
                Validators.email
            ]]
        })
        this.errorMessage = ''
    }

    get f() { return this.myForm.controls; }

    resetPassword(){        
        if (this.myForm.invalid) {
            return;
        }
        console.log(this.userInfo)
        this.submitted = true
        this.emailService.sendResetPasswordEmail(this.userInfo).subscribe(
            (res) => {
                if(res.error){
                    console.log("fotgot ts file: " + res.error)
                    this.errorMessage = "*" + res.error                    
                }
                else{
                    this.errorMessage = "*Reset Email has been sent to " + this.userInfo.Email
                    console.log("Reset Email has been sent to " + this.userInfo.Email)                                        
                }
            },
            err => {
                console.log(err)
            }
        );
    }
}

   