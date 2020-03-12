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

    public getCustomerInfoByID(CustomerPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "customers/profile-info/" + CustomerPK);
    }

    public updateCustomerInfo(CustomerPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "customers/update-customer-info/" + CustomerPK, customer);
    }
}
