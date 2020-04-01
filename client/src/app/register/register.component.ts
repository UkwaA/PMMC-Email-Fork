import { Component, Inject } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterModalDialogComponent } from '../components/register-modal-dialog/register-modal-dialog.component';


@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

// export class registrationDialog{
//     constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        
//     }
// }

export class RegisterComponent {
    registerForm: FormGroup;
    submitted = false;
    errorMessage = ''
    currentUserPK: number
    registered = false;

    credentials: TokenPayload = {
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: '1',
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
            email: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]],
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
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Register Confirmation",
            username: this.registerForm.get('username').value,
            email: this.registerForm.get('email').value,
            // description: "Are you sure you would like to register with the following information? Username: {{data.username}}",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
          }
        const modalDialog = this.matDialog.open(RegisterModalDialogComponent, dialogConfig);
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
                this.currentUserPK = res.UserPK
                this.auth.registeredPK = this.currentUserPK.toString();
                console.log("Current PK: " + this.currentUserPK)
                this.router.navigateByUrl("/customer-register/" + this.currentUserPK);            
            }
        },
            err => {
                console.error(err);
                return
            }
        );
        //this.router.navigateByUrl("/customer-register/" + this.currentUserPK);
            
    }
}
