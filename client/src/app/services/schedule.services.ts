import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'
import {ProgramScheduleData} from '../data/program-schedule-data'
import { AppConstants } from '../constants'

@Injectable()
export class ProgramScheduleService{
    constructor(private http: HttpClient) {}

    public addNewProgramSchedule(programSchedule: ProgramScheduleData): Observable<any>{
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + "schedule/add-new-program-schedule", programSchedule);
    }

    public getAllSchedules(): Observable<any> {
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + "schedule/get-all-schedules");
    }

}