import {Injectable, Inject} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthenticationService} from './authentication.service'

@Injectable()
export class AuthSystemRoleGuardService implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) {}

    canActivate () {
        if(this.auth.getUserDetails().Role_FK != '3')
        {
            this.router.navigateByUrl('/')
            return false
        }
        return true
    }
}