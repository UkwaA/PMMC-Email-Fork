import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data'
import { ok } from 'assert'
import { Observable } from 'rxjs'

@Injectable()
export class ProgramServices {
  private expressBaseUrl: string = "http://localhost:3000"

  constructor(private http: HttpClient, private router: Router) { }

  public sendRequestToExpress(endpoint: string): Promise<any> {
    return this.http.get(this.expressBaseUrl + endpoint).toPromise();
  }

  public getAllPrograms(): Promise<ProgramData[]> {
    return this.sendRequestToExpress('/program/get-programs')
  }

  public addNewProgram(program: ProgramData): Observable<any> {
    // var httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'multipart/form-data',
    //   })
    // };
    return this.http.post(this.expressBaseUrl + '/program/add-program', program)
  }
  // public addNewProgram(program:any): Observable<any> {
  //   return this.http.post(this.expressBaseUrl + '/program/add-program', program)
  // }
}

