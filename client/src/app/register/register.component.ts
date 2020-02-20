import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    registerForm: FormGroup;
    submitted = false;

    credentials: TokenPayload = {
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: '',
        Email: ''
    }

    constructor(private auth: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            //firstName: ['', Validators.required],
            //lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]],
            //confirmPassword: ['', Validators.required],
            //acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }    

    // onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }

    register() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }        

        this.auth.register(this.credentials).subscribe(() =>{
            this.router.navigateByUrl("/profile");
        })
        //     () => {
        //         this.router.navigateByUrl("/profile");
        //     },
        //     err => {
        //         console.error(err);
        //     }
        // );
    }
}
