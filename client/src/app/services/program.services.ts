import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data'

@Injectable()
export class ProgramServices {
    private expressBaseUrl:string = "http://localhost:3000"

    constructor(private http:HttpClient, private router:Router) {}

    public sendRequestToExpress(endpoint:string):Promise<any> {
        return this.http.get(this.expressBaseUrl + endpoint).toPromise();
      }

      public getAllPrograms(): Promise <ProgramData[]>{
        return this.sendRequestToExpress('/program/get-programs')
    }
}