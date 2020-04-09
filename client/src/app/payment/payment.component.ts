import { OnInit, Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
    constructor(public auth: AuthenticationService){}

    ngOnInit(){

    }
}