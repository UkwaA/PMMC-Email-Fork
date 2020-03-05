import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {CustomerData} from '../data/customer-data'

@Injectable()
export class CustomerService{
    private expressBaseUrl: string = "http://localhost:3000"  
    constructor(private http: HttpClient) {}

    public finishRegister(customer: CustomerData): Observable<any>{
        return this.http.post(this.expressBaseUrl + "/users/customer-register", customer);
    }
}