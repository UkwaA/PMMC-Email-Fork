import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserDetails} from '../../authentication.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.services';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';

declare var $: any;
@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../components/modal-dialog/modal-dialog.component.css']
})


export class ForgotPasswordComponent{
    resetForm: FormGroup
    submitted = false
    userInfo = {
        UserPK: '',
        Username: '',
        Password: '',
        Email: '',
        resetPasswordToken: ''
    }

    constructor(private fb: FormBuilder, private auth: AuthenticationService, public emailService:EmailService,
        public dialogRef: MatDialogRef<ForgotPasswordComponent>, public matDialog:MatDialog,
        private router: Router){}

    faEnvelope = faEnvelope;

    ngOnInit(){
        $(".alert-success").hide()
        $(".alert-danger").hide()
        this.resetForm = this.fb.group({            
            email: ['', [
                Validators.required,
                Validators.email,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")
            ]]
        })
    }

    public errorHandling = (control: string, error: string) => {
        return this.resetForm.controls[control].hasError(error);
      }

    closeModal(){
        this.dialogRef.close("No");
      }
    
      actionFunction() {
        console.log("Modal closing");
        this.dialogRef.close("Yes");
      }

    resetPassword(){        
        this.submitted = true
        if (this.resetForm.invalid) {
            return;
        }
        console.log(this.userInfo)
        this.userInfo.Email = this.resetForm.get("email").value;
        
        this.emailService.sendResetPasswordEmail(this.userInfo).subscribe(
            (res) => {
                if(res.error){
                    console.log("fotgot ts file: " + res.error)                                     
                }
                else{                    
                    console.log("Reset Email has been sent to " + this.userInfo.Email)
                    this.closeModal();
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
        // dialogConfig.disableClose =true;
        dialogConfig.id = "reset-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "400px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Forgot Password",
            description: "A link to reset your password has been sent to " + this.userInfo.Email 
            + ". Please follow the instructions in the email to continue the process." ,
            actionButtonText: "Close",   
            numberOfButton: "1"         
          }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    }
}

   