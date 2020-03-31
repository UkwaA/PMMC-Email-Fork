import {Component, OnInit} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { EmailService } from '../../services/email.services';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
//import { ConsoleReporter } from 'jasmine';

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
    
    //Icon for UI
    faUser = faUser;
    faKey = faKey;
    faEnvelope = faEnvelope;
    faCheckDouble = faCheckDouble;

    constructor(private fb: FormBuilder, private auth: AuthenticationService, 
        public emailService:EmailService, private route:ActivatedRoute, 
        private router: Router, public matDialog: MatDialog ){            
    }

    ngOnInit(){
        this.errorMessage = ''
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
                //Need to research on this
                this.router.navigateByUrl("/")
                console.log("Token is empty")
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
                //Token is expired
                if(data.message == "ExpiredToken")
                {
                    this.CurrentState = "NotVerified"    
                    this.errorMessage = "Token is invalid or expired"
                }
                //User is deleted before setting new password
                else if(data.message == "UserNotFound"){
                    this.CurrentState = "NotVerified" 
                    this.errorMessage = "Token is invalid or expired"
                }
                //The reset password link has been used before, token is invalid
                else if(data.message == "PasswordHasChanged"){
                    this.CurrentState = "NotVerified" 
                    this.errorMessage = "Token is invalid or expired"
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
                console.log(this.CurrentState)
            },
            err => {
                console.log("No data")
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
        this.auth.resetUserPassword(this.currentUserPK, this.userDetails).subscribe(response => {
            console.log("Respone: " + response.message)
            this.openModal()            
            // setTimeout(() =>{
            //     //switch to log in page in 5 sec                
            //     this.router.navigateByUrl('/login')
            // }, 3000)
        })

        this.emailService.sendPasswordConfirmationEmail(this.userDetails).subscribe(
            (res) => {
                if(res.error){
                    console.log("fotgot ts file: " + res.error)                                     
                }
                else{                    
                    console.log("Reset Email has been sent to " + this.userDetails.Email)
                }
            },
            err => {
                console.log(err)
            })

    }

    //Configure Modal Dialog
    openModal(){        
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Set New Password",
            description: "Password has been successfully updated. You are now redirecting to Login Page" ,
            actionButtonText: "Close",   
            numberOfButton: "1"         
          }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //redirect Users to login page
                this.router.navigateByUrl('/login')
            }
            else{
                console.log("stop")                
            }
        })
    }

}