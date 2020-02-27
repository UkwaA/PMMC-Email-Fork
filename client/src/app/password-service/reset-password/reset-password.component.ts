import {Component, OnInit} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent{
    resetPasswordForm: FormGroup
    errorMessage = ''
    submitted = false    
    CurrentState : any
    resetToken = ''
    userDetails: UserDetails
    currentUserPK: number
    newPassword: string  
    successMessage = ''  
    
    //Icon for UI
    faUser = faUser;
    faKey = faKey;
    faEnvelope = faEnvelope;
    faCheckDouble = faCheckDouble;

    constructor(private fb: FormBuilder, private auth: AuthenticationService, 
        public emailService:EmailService, private route:ActivatedRoute, private router: Router ){            
    }

    ngOnInit(){
        this.errorMessage = ''
        this.successMessage = ''
        this.resetPasswordForm = this.fb.group({            
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],            
        },{
            validator: this.MustMatch('password', 'confirmPassword')
        });

        this.CurrentState = "Wait"
        this.route.params.subscribe(params => {
            this.resetToken = params.token
            console.log(this.resetToken)
            
            //If token is empty, navigate to homepage, else verify the token
            if(!params.token){
                this.router.navigateByUrl("/")
            }
            else{                
                this.VerifyToken()                
            }            
        })
    }

    VerifyToken(){
        this.emailService.ValidPasswordToken({resettoken: this.resetToken}).subscribe(
            data => {                
                console.log("Response data: " + data.message)
                if(data.message == "ExpiredToken")
                {
                    this.CurrentState = "NotVerified"    
                    this.errorMessage = "Token is invalid or expired"
                }
                else if(data.message == "UserNotFound"){
                    this.CurrentState = "NotVerified" 
                    this.errorMessage = "User is not found"
                }
                else{
                    this.CurrentState = "TokenValid"
                    console.log("Current UserPK: " + data.UserPK)
                    this.currentUserPK = data.UserPK
                    //get userDetails data
                    this.auth.getUserDetailsByID(this.currentUserPK).subscribe(user => {
                        this.userDetails = user                        
                    })
                }
            },
            err => {
                this.CurrentState = "NotVerified"                
                this.errorMessage = "Token is invalid or expired"
            }
        );
    }

    get f() { return this.resetPasswordForm.controls; }

    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
    
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
    
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
    }

    setNewPassword(){
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetPasswordForm.invalid) {
            return;
        }
        this.userDetails.Password = this.newPassword
        console.log(this.userDetails)
        this.auth.updateUserPassword(this.currentUserPK, this.userDetails).subscribe(response => {
            console.log("Respone: " + response.message)
            this.successMessage = response.message
            setTimeout(() =>{
                //switch to log in page in 5 sec                
                this.router.navigateByUrl('/login')
            }, 5000)
        })
    }

}