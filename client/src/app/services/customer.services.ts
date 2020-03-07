import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'

@Injectable()
export class CustomerService{
    private expressBaseUrl: string = "http://localhost:3000"  
    constructor(private http: HttpClient) {}

    public finishRegister(customer: CustomerData): Observable<any>{
        return this.http.post(this.expressBaseUrl + "/customers/customer-register", customer);
    }

    public getCustomerInfoByID(CustomerPK: number):Observable<any>{
        return this.http.get(this.expressBaseUrl + "/customers/profile-info/" + CustomerPK);
    }

    public updateCustomerInfo(CustomerPK: number, customer: CustomerData):Observable<any>{
        return this.http.put(this.expressBaseUrl + "/customers/update-customer-info/" + CustomerPK, customer);
    }
}
