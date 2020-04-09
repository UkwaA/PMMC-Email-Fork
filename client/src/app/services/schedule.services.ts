import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {ProgramScheduleData} from '../data/program-schedule-data'
import { AppConstants } from '../constants'

@Injectable()
export class ProgramScheduleService{
    constructor(private http: HttpClient) {}

    public addNewScheduleSetting(scheduleSetting: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-schedule-setting", scheduleSetting);
    }

    public addNewSchedule(schedule: any): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-schedule", schedule);
    }

    public getAllScheduleSetting(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedule-setting");
    }

    public getScheduleSettingById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-schedule-setting-by-id/" + ProgramPK);
    }

    public getScheduleById(ProgramPK: number): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-program-schedules-by-id/" + ProgramPK);
    }
    
    public getScheduleByIdStartEnd(ProgramPK: number, eventStart: string,eventEnd: string): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-schedule-by-id-start-end/" + ProgramPK 
                + "/" + eventStart + "/" + eventEnd);
    }

}