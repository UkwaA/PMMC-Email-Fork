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

    public getAllReservationByUserPK(UserPK: number): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation-by-userpk/" + UserPK);
    }

    public getAllReservationBySchedulePK(SchedulePK: number): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation-by-schedulepk/" + SchedulePK);
    }

    //This request is specified in Reservation Management page
    public getAllReservationDetailsForReservationManagement(): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation-details-for-reservation-management/");
    }

    public getAllReservationDetailsForReservationManagementByUserPK(UserPK: number): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation-details-for-reservation-management-by-userpk/" + UserPK);
    }

    //Define this request for View Schedule Page
    public getAllReservationDetailsForViewSchedule(SchedulePK: number, ProgramPK: number, ProgramType: number): Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-all-reservation-details-for-view-schedule/" + SchedulePK + "/" + ProgramPK + "/" + ProgramType);
    }

    public addNewReservationHeader(reservationHeader: ReservationHeader): Observable<any>{
       return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-new-reservation", reservationHeader);
    }

    public addGroupReservationDetails(reservationDetails: any) {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-group-reservation-details", reservationDetails);
    }

    public getGroupReservationDetailsByReservationPK(ReservationPK: any) {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-group-reservation-details-by-reservationpk/" + ReservationPK);
    }

    public addIndividualReservationDetails(reservationDetails: any) {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "reservation/add-individual-reservation-details", reservationDetails);
    }

    public getIndividualReservationDetailsByReservationPK(ReservationPK: any) {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-individual-reservation-details-by-reservationpk/" + ReservationPK);
    }

    public getPaymentInfoByReservationPK(ReservationPK: number):Observable<any>{
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "reservation/get-payment-info-by-reservationpk/" + ReservationPK);
    }  

    public updateRemainingBalance(ReservationPK: number, amount: number):Observable<any>{
        return this.http.put(AppConstants.EXPRESS_SERVER_URL + "reservation/update-balance/" + ReservationPK, {"value" : amount});
    }
}
