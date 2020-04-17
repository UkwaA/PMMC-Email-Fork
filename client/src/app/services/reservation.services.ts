import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'
import { AppConstants } from '../constants'

@Injectable()
export class ReservationService {
    constructor(private http: HttpClient) {}

    public addNewReservation(customer: CustomerData): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/customer-register", customer);
    }

    public getCustomerInfoByID(UserPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/profile-info/" + UserPK);
    }

    public updateCustomerInfo(UserPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "reservation/update-customer-info/" + UserPK, customer);
    }
}
