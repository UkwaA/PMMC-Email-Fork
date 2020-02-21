import {Component} from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginForm: FormGroup;
    submitted = false;
    errorMessage = ''

    credentials: TokenPayload ={
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: '',
        Email: ''
    }

    constructor(private auth:AuthenticationService, private router:Router, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required]]
        });        

        this.auth.profile().subscribe(
            user => {
                this.router.navigateByUrl('/')
            }
        )
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {
        this.submitted = true;        
        if (this.loginForm.invalid) {
            return;
        }

        this.auth.login(this.credentials).subscribe(() => {            
            this.router.navigateByUrl('/profile')
        }, 
        err => {
            //alert('Username and password do not match')            
            this.errorMessage = '*Username and password do not match'
            console.error(err)      
            return
        })
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
}