import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';

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
        name: '',
        email: '',
        resetPasswordToken: ''
    }

    constructor(private fb: FormBuilder, private auth: AuthenticationService, public emailService:EmailService){}

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
        this.emailService.sendResetPasswordEmail(this.userInfo).subscribe(
            (res) => {
                if(res.error){
                    console.log("fotgot ts file: " + res.error)
                    this.errorMessage = "*" + res.error
                    this.submitted = false
                }
                else{
                    this.errorMessage = "*Reset Email has been sent to " + this.userInfo.email
                    console.log("Reset Email has been sent to " + this.userInfo.email)                    
                    this.submitted = true
                }
            },
            err => {
                console.log(err)
            }
        );
    }
}

   