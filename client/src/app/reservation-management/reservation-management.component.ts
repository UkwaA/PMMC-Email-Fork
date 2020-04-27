import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ReservationHeader } from '../data/reservation-header';

@Component ({
    templateUrl: '/reservation-management.component.html',
    styleUrls: ['./reservation-management.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReservationManagement implements OnInit{
    role:string;
    pastReservationArray: ReservationHeader[];
    ongoingReservationArray: ReservationHeader[];

    constructor(private auth: AuthenticationService){}
    
    ngOnInit(){
        this.auth.profile().subscribe(
            user => {
                this.role = user.Role_FK;
                console.log(this.role)
            },
            err => {
                console.error(err)
            }
          )

    }
}