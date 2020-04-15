import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {ProgramScheduleData} from '../data/program-schedule-data'
import { AppConstants } from '../constants'

@Injectable()
export class ProgramScheduleService{
    constructor(private http: HttpClient) {}

    /*================================
            SCHEDULE SETTING
    ================================*/
    public getAllScheduleSettings(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedule-settings");
    }

    // public getScheduleSettingsByID(ProgramPK: any): Observable<any> {
    //     return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedule-settings-by-id/" + ProgramPK);
    // }

    public addNewScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-schedule-setting", scheduleSetting);
    }

    /*================================
            SESSION DETAILS
    ================================*/
    public addNewSessionDetails(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-session-details", scheduleSetting);
    }

    public updateSessionDetails(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-session-details", scheduleSetting);
    }

    public deactivateSessionDetails(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/deactivate-session-details/", scheduleSetting);
    }
    
    public getAllSessionDetails(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-session-details");
    }

    public getSessionDetailsById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-session-details-by-id/" + ProgramPK);
    }

    /*================================
            SCHEDULE
    ================================*/
    public addNewSchedule(schedule: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-schedule", schedule);
    }

    public getScheduleById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-program-schedules-by-id/" + ProgramPK);
    }
    
    public getScheduleByIdStartEnd(ProgramPK: number, eventStart: string,eventEnd: string): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-schedule-by-id-start-end/" + ProgramPK 
                + "/" + eventStart + "/" + eventEnd);
    }

}