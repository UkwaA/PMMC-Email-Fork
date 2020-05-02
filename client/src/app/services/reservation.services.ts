import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'
import { AppConstants } from '../constants'

import { ReservationHeader } from '../data/reservation-header';

@Injectable()
export class ReservationService {
    constructor(private http: HttpClient) {}

    public getAllReservation(): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation");
    }

    public addNewReservationHeader(reservationHeader: ReservationHeader): Observable<any>{
       return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-new-reservation", reservationHeader);
    }

    public addGroupReservationDetails(reservationDetails: any) {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-group-reservation-details", reservationDetails);
    }

    public addIndividualReservationDetails(reservationDetails: any) {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-individual-reservation-details", reservationDetails);
    }

    public getCustomerInfoByID(UserPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/profile-info/" + UserPK);
    }

    public updateCustomerInfo(UserPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "reservation/update-customer-info/" + UserPK, customer);
    }

    public updateRemainingBalance(ReservationPK: number, amount: number):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "reservation/update-balance/" + ReservationPK, {"amount" : amount});
    }
}
