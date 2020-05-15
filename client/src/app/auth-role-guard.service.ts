import {Injectable, Inject} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable()
export class AuthRoleGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate () {
        if(this.auth.getUserDetails().Role_FK == 1)
        {
            this.router.navigateByUrl('/')
            return false
        }
        return true
    }
}