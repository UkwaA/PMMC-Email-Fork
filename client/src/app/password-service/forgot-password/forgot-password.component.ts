import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.services';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';


@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent{
    myForm: FormGroup
    submitted = false
    userInfo = {
        UserPK: '',
        Username: '',
        Email: '',
        resetPasswordToken: ''
    }

    constructor(private fb: FormBuilder, private auth: AuthenticationService, public emailService:EmailService,
        public matDialog: MatDialog, private router: Router){}

    faEnvelope = faEnvelope;

    ngOnInit(){
        this.myForm = this.fb.group({            
            email: ['', [
                Validators.required,
                Validators.email
            ]]
        })
    }

    get f() { return this.myForm.controls; }

    resetPassword(){        
        this.submitted = true
        if (this.myForm.invalid) {
            return;
        }
        console.log(this.userInfo)
        
        this.emailService.sendResetPasswordEmail(this.userInfo).subscribe(
            (res) => {
                if(res.error){
                    console.log("fotgot ts file: " + res.error)                                     
                }
                else{                    
                    console.log("Reset Email has been sent to " + this.userInfo.Email)
                }
                this.openModal()
            },
            err => {
                console.log(err)
            }
        );
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
        dialogConfig.data = {
            title: "Forgot Password",
            description: "Reset Password Email has been sent to " + this.userInfo.Email 
            + ". Please follow instructions in the email to reset your password. You are now redirecting to Login Page." ,
            actionButtonText: "Close",   
            numberOfButton: "1"         
          }
          // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //call register function
                setTimeout(() =>{
                    //switch to log in page in 5 sec                
                    this.router.navigateByUrl('/login')
                }, 1000)
            }
            else{
                console.log("stop")                
            }
        })
    }
}

   