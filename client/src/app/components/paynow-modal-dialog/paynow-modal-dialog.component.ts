import { OnInit, Component, ViewEncapsulation } from '@angular/core';


@Component ({
    templateUrl: '/reservation-management.component.html',
    styleUrls: ['./reservation-management.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PaynowModalDialog implements OnInit{
    role:string;

    constructor(){}
    
    ngOnInit(){
       
    }
}