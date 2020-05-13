import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails} from '../authentication.service';
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    details: UserDetails;
    faPhone = faPhone;
    option: string;
    role: number;
    userName: string;
    id: number;

    constructor(public auth: AuthenticationService, private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
        this.option = '';
        this.auth.profile().subscribe(
            user => {
                this.details = user;
                this.role = user.Role_FK;
                this.userName = user.Username;
                this.id = user.UserPK;
            },
            err => {
                console.error(err);
            }
        );
    }
}
