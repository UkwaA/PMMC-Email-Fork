import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'
import { AppConstants } from '../constants'

@Injectable()
export class CustomerService{
    constructor(private http: HttpClient) {}

    public finishRegister(customer: CustomerData): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "customers/customer-register", customer);
    }

    public getCustomerInfoByID(UserPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "customers/profile-info/" + UserPK);
    }

    public updateCustomerInfo(UserPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "customers/update-customer-info/" + UserPK, customer);
    }

    public getAllUsersCreatedInTimeRange(start:any, end:any):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "customers/get-all-users-created-within-time-range/" + start + "/" + end);
    }
}
