import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';


@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    registerForm: FormGroup;
    submitted = false;
    errorMessage = ''

    credentials: TokenPayload = {
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: '',
        Email: ''
    }

    constructor(private auth: AuthenticationService, private router: Router, 
        private formBuilder: FormBuilder, public matDialog: MatDialog) { }

    faUser = faUser;
    faKey = faKey;
    faEnvelope = faEnvelope;
    faCheckDouble = faCheckDouble;

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]        
        },{
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }

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

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }    

    //Configure Modal Dialog
    openModal(){
        //Validate form before open modal dialog
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
            title: "Register Confirmation",
            description: "All information is correct?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
          }
          // https://material.angular.io/components/dialog/overview
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //call register function                
                this.continue_register()
            }
            else{
                console.log("stop")                
            }
        })
    }

    continue_register() {
        this.auth.register(this.credentials).subscribe((res) => {
            if(res.error)
            {
                console.log(res)
                this.errorMessage = "*" + res.error
                return
            }
            else{
                this.router.navigateByUrl("/customer-register/" + this.auth.getUserDetails().UserPK);            
            }
        },
            err => {
                console.error(err);
            }
        );
            
    }
}
