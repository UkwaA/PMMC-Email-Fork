import {Injectable, Inject} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthenticationService} from './authentication.service'
import {CustomerService} from './services/customer.services'
import {Location} from '@angular/common'

@Injectable()
export class AuthCustomerGuardService implements CanActivate {
    URL_ID: string;
    constructor(public location: Location, private auth: AuthenticationService, private CS: CustomerService, private router: Router) {
        console.log("Customer Guard Service")
        this.URL_ID = this.location.path().split('/')[this.location.path().split('/').length-1];
        console.log("URL_ID: " + this.URL_ID)
    }
    
    canActivate () {
        console.log("Logged in")
        console.log("User PK: " + this.auth.registeredPK)
        if (this.URL_ID == 'register')
            return true;
        // if (this.auth.registeredPK != this.URL_ID)
        // {
        //     this.router.navigateByUrl('/')
        //     return false
        // }
        return false;
    }
}