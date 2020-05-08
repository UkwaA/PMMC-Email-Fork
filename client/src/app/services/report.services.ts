import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from '../constants'

@Injectable()
export class ReportServices{
    constructor(private http: HttpClient) {}

    /*******RESERVATION MONTHLY REPORT**********/
    public getReservationsByYearRange(startYear: any, endYear:any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'report/get-reservation-by-year-range/' + startYear + '/' + endYear);
    }

}
