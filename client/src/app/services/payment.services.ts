import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import { AppConstants } from '../constants'

@Injectable()
export class PaymentServices {
    constructor(private http: HttpClient) {}

    public processToken(tokenObj: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'payment/pay', tokenObj);
    }

    public processRefund(token: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'payment/refund', token);
    }

    public createPaymentData(paymentObj : any): Observable<any> {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'payment/create-payment', paymentObj);
    }

    public updatePaymentData(paymentObj : any): Observable<any> {
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + 'payment/update-payment', paymentObj);
    }

    public getPaymentDataByPaymentPK(PaymenPK: any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'payment/get-payment-by-id/' + PaymenPK);
    }

    public getPaymentDataByUser(UserPK: any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'payment/get-payment-by-user/' + UserPK);
    }

    public getPaymentDataByReservation(ReservationPK: any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'payment/get-payment-by-reservation/' + ReservationPK);
    }
}
