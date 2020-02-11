import {Component} from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    credentials: TokenPayload ={
        user_pk: 0,
        username: '',
        password: '',
        role_fk: '',
        email: ''
    }

    constructor(private auth:AuthenticationService, private router:Router) {}

    ngOnInit() {
        this.auth.profile().subscribe(
            user => {
                this.router.navigateByUrl('/')
            }
        )
    }

    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/profile')
        },
        err => {
            console.error(err)
        })
    }
}