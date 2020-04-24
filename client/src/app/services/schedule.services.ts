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
    public getAllScheduleSettingsByProgram(ProgramPK: any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedule-settings-by-program/" + ProgramPK);
    }

    // public getScheduleSettingsByID(ProgramPK: any): Observable<any> {
    //     return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedule-settings-by-id/" + ProgramPK);
    // }

    public addNewScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-schedule-setting", scheduleSetting);
    }

    public updateScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-schedule-setting", scheduleSetting);
    }

    public updateScheduleSettingSessionDetails(sessions: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-schedule-setting-session-details", sessions);
    }

    public deactiveScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/deactivate-schedule-setting", scheduleSetting);
    }

    /*================================
            SESSION DETAILS
    ================================*/
    public addNewSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-session-details", sessionDetails);
    }

    public updateSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-session-details", sessionDetails);
    }

    public deactivateSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/deactivate-session-details/", sessionDetails);
    }
    
    public getAllSessionDetails(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-session-details");
    }

    public getSessionDetailsById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-session-details-by-id/" + ProgramPK);
    }

    public updateSchedulesInBulk(schedules: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-schedules-in-bulk", schedules);
    }

    public addNewAdditionalSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-additional-session-details", sessionDetails);
    }

    public updateAdditionalSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/update-additional-session-details", sessionDetails);
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
    
    public getScheduleByIdStartEnd(SessionDetailsPK:number, ProgramPK: number, eventStart: string,eventEnd: string): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-schedule-by-id-start-end/" + SessionDetailsPK
                + "/" + ProgramPK + "/" + eventStart + "/" + eventEnd);
    }

    /*================================
            BLACKOUT DATE
    ================================*/
    public addBlackoutDate(blackoutDate: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-blackout-date", blackoutDate);
    }

    public getAllBlackoutDatesByProgram(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-program-blackout-date-by-id/" + ProgramPK);
    }

    /*================================
            OTHERS
    ================================*/
    public setProgramColor(programColor:any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/set-program-color", programColor);
    }
}