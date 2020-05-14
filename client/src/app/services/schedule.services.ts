import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from '../constants'

@Injectable()
export class ProgramScheduleService{
    constructor(private http: HttpClient) {}

    /*================================
            SCHEDULE SETTING
    ================================*/
    public getScheduleSettingsByProgram(ProgramPK: any): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-schedule-settings-by-program/' + ProgramPK);
    }

    public addNewScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/add-new-schedule-setting', scheduleSetting);
    }

    public updateScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-schedule-setting', scheduleSetting);
    }

    public updateScheduleSettingSessionDetails(sessions: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-schedule-setting-session-details', sessions);
    }

    public deactiveScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/deactivate-schedule-setting', scheduleSetting);
    }

    public getAllProgramsWithScheduleSettingsRequirements():Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-all-programs-with-schedule-settings-and-requirements');
    }

    /*================================
            SESSION DETAILS
    ================================*/
    public addNewSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/add-new-session-details', sessionDetails);
    }

    public updateSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-session-details', sessionDetails);
    }

    public deactivateSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/deactivate-session-details/', sessionDetails);
    }

    public getAllSessionDetails(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-all-session-details');
    }

    public getSessionDetailsById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-session-details-by-id/' + ProgramPK);
    }

    public updateSchedulesInBulk(schedules: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-schedules-in-bulk', schedules);
    }

    public addNewAdditionalSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/add-new-additional-session-details', sessionDetails);
    }

    public updateAdditionalSessionDetails(sessionDetails: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-additional-session-details', sessionDetails);
    }

    /*================================
            SCHEDULE
    ================================*/
    public addNewSchedule(schedule: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/add-new-schedule', schedule);
    }

    public getScheduleByProgramPK(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-program-schedules-by-programpk/' + ProgramPK);
    }

    public getScheduleByIdStartEnd(SessionDetailsPK: number, ProgramPK: number, eventStart: string, eventEnd: string): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-schedule-by-id-start-end/' + SessionDetailsPK
                + '/' + ProgramPK + '/' + eventStart + '/' + eventEnd);
    }

    public getScheduleById(SchedulePK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-program-schedules-by-id/' + SchedulePK);
    }

    public getAllScheduleWithReservationInfo(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-all-schedules-with-reservation-info/');
    }

    public updateSingleScheduleAndSendEmail(startEndTimeObject: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-single-schedule-send-email-notification', startEndTimeObject);
    }

    public updateNumberOfParticipant(SchedulePK: number, quantity: number): Observable<any> {
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-number-participant/' + SchedulePK, {"value": quantity});
    }

    /*================================
            BLACKOUT DATE
    ================================*/
    public addBlackoutDate(blackoutDate: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/add-blackout-date', blackoutDate);
    }

    public updateBlackoutDate(blackoutDate: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/update-blackout-date', blackoutDate);
    }

    public deactivateBlackoutDate(blackoutDate: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/deactivate-blackout-date', blackoutDate);
    }

    public getAllBlackoutDatesByProgram(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-program-blackout-date-by-id/' + ProgramPK);
    }

    public getAllBlackoutDateException(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'schedule/get-all-blackout-date-exception/');
    }
    /*================================
            OTHERS
    ================================*/
    public setProgramColor(programColor:any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'schedule/set-program-color', programColor);
    }
}