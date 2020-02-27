import { Component } from '@angular/core'
import { AuthenticationService, UserDetails} from '../authentication.service'
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';
import { HFService } from '../services/hf.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    details: UserDetails;
    faPhone = faPhone;
    option: string;
    role:string;
    
    constructor(private auth: AuthenticationService, public hf: HFService, private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
        this.option = "";
        this.hf.hide(); 

        this.auth.profile().subscribe(
            user => {
                this.details = user;
                this.role = user.Role_FK;
                console.log(this.role);
            },
            err => {
                console.error(err)
            }
        )
    }
        
}