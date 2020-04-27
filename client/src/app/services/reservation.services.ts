import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'
import { AppConstants } from '../constants'

import { ReservationHeader } from '../data/reservation-header';

@Injectable()
export class ReservationService {
    constructor(private http: HttpClient) {}

    public addNewReservationHeader(reservationHeader: ReservationHeader): Observable<any>{
       return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-new-reservation", reservationHeader);
    }

    public addReservationDetails(reservationDetails: any, programType: number) {
        switch(programType){
            case AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM:
                return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-group-reservation-details", reservationDetails);
            case AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM:
                return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-individual-reservation-details", reservationDetails);
        }
    }

    public getCustomerInfoByID(UserPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/profile-info/" + UserPK);
    }

    public updateCustomerInfo(UserPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "reservation/update-customer-info/" + UserPK, customer);
    }
}
