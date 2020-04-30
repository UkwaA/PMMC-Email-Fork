import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { AppConstants } from '../constants'

import { ReservationHeader } from '../data/reservation-header';

@Injectable()
export class PaymentServices {
    constructor(private http: HttpClient) {}

    public createPaymentIntent(amount: number): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "payment/create-payment-intent", amount);
    }

    
    
}
