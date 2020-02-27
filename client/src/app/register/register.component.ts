import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';

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

    constructor(private auth: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { }

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

    register() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.auth.register(this.credentials).subscribe((res) => {
            if(res.error)
            {
                console.log(res)
                this.errorMessage = "*" + res.error
                return
            }
            else
                this.router.navigateByUrl("/profile");            
        },
            err => {
                console.error(err);
            }
        );
            
    }
}
