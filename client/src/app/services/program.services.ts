import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data'
import { ok } from 'assert'
import { Observable } from 'rxjs'
import { AppConstants } from '../constants'

@Injectable()
export class ProgramServices {
  private expressBaseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient, private router: Router) { }

  public sendRequestToExpress(endpoint: string): Promise<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + endpoint).toPromise();
  }

  public getAllPrograms(): Promise<ProgramData[]> {
    return this.sendRequestToExpress('program/get-programs')
  }

  public getActivePrograms(): Promise<ProgramData[]> {
    return this.sendRequestToExpress('program/get-active-programs')
  }
  public getProgramHeaderDeatailsByID(ProgramPK: number): Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'program/get-program-header/' + ProgramPK);
  }

  public addNewProgram(program: any): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'program/add-program', program)
  }

  public updateProgramHeader(programHeaderData: any): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'program/update-program-header', programHeaderData)
  }

  public getProgramRequirementByID(programType: string,ProgramPK: number): Observable<any> {
    switch (programType) {
      case 'g':
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'program/get-group-program-requirement/' + ProgramPK);
      case 'i':
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'program/get-individual-program-requirement/' + ProgramPK);
    }
  }

  public updateProgramLayoutDetails(programType: string, programData: any): Observable<any> {
    switch (programType) {
      case 'g':
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'program/update-g-program-requirement', programData)
        break;
      case 'i':
        return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'program/update-i-program-requirement', programData)
        break;
    }
  }

  public getProgramRequirementDetails(programType: string, ProgramPK: number): Observable<any> {
    switch (programType) {
      case 'g':
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'program/get-group-requirement/' + ProgramPK)
      case 'i':
        return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'program/get-individual-requirement/' + ProgramPK)
    }
  }

  public setProgramActiveStatus(ProgramPK: number, IsActive: boolean):Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + "program/set-program-status/" + ProgramPK + "/" + IsActive)
  }
}
