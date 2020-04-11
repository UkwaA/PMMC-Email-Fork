import {Injectable, Inject} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate () {
        if(this.auth.isLoggedIn()) {
            return true
        } else {
            this.router.navigateByUrl('/')
            return false
        }
    }

   
}
