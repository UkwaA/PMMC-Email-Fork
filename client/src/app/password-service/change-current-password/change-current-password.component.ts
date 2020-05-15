import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.services';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, UserSecretData, TokenPayload} from '../../authentication.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';

@Component({
    templateUrl: './change-current-password.component.html',
    styleUrls: ['./change-current-password.component.css']
})

export class ChangeCurrentPasswordComponent{
    changePasswordForm: FormGroup
    errorMessage = ''
    submitted = false
    currentUserPK: number
    newPassword: string
    userData: UserSecretData = {
        UserPK: 0,
        currentPassword: '',
        newPassword: ''
    }

    credentials: TokenPayload ={
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: 0,
        Email: ''
    }

    constructor(private fb: FormBuilder, private auth: AuthenticationService, public emailService:EmailService,
        private route:ActivatedRoute, private router: Router, public matDialog: MatDialog ){            
    }

    ngOnInit(){
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],            
        },{
            validator: this.MustMatch('password', 'confirmPassword')
        });
        
        this.errorMessage = ''

        this.userData.UserPK = this.auth.getUserDetails().UserPK
        this.currentUserPK = this.auth.getUserDetails().UserPK        
        
        this.credentials.UserPK = this.auth.getUserDetails().UserPK
        this.credentials.Username = this.auth.getUserDetails().Username
        this.credentials.Email = this.auth.getUserDetails().Email
    }

    get f() { return this.changePasswordForm.controls; }

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
            title: "Change Password",
            description: "Password has been successfully updated. You are now redirecting to Dashboard" ,
            actionButtonText: "Close",   
            numberOfButton: "1"         
          }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //********************
                //IMPORTANT:
                //********************/
                //Need to log out and log in again to generate new token for this new session
                this.auth.logout()
                //Login
                this.auth.login(this.credentials).subscribe(() => {
                    this.router.navigateByUrl('/profile')                    
                }, 
                err => {
                    //alert('Username and password do not match')            
                    this.errorMessage = '*Error while changing password'
                    console.error(err)      
                    return
                })
            }
            else{
                console.log("stop")                
            }
        })
    }

    setNewPassword(){
        this.submitted = true;
        // stop here if form is invalid
        if (this.changePasswordForm.invalid) {
            return;
        }        

        //bind newPassword to credentials and userData object
        this.userData.newPassword = this.newPassword
        this.credentials.Password = this.newPassword

        this.auth.changeCurrentPassword(this.userData.UserPK, this.userData).subscribe(
            data =>{
                if(data.error){
                    this.errorMessage = data.error
                    return
                }
                else{                    
                    this.openModal()     
                    this.sendPasswordConfirmationEmail()               
                }                
        },
        err => {
            console.log(err)
            return
        })
    }

    sendPasswordConfirmationEmail(){
        //Send confirmation email about changing password
        this.emailService.sendPasswordConfirmationEmail(this.credentials).subscribe(
            (res) => {
                if(res.error){
                    console.log(res.error)                                     
                }
                else{                    
                    console.log("Reset Email has been sent to " + this.credentials.Email)
                }
            },
            err => {
                console.log(err)
            })
    }
}
