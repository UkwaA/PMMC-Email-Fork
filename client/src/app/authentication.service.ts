import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import {UserData} from './data/user-data'


export interface UserDetails {
    UserPK: number
    Username: string
    Password: string
    Role_FK: string
    Email: string
    exp: number
    iat: number
}

interface TokenResponse {
    token: string
}

export interface TokenPayload {
    UserPK: number
    Username: string
    Password: string
    Role_FK: string
    Email: string
}

export interface TokenPayload2{
  CustomerPK: number
  FirstName: string
  LastName: string
  PhoneNo: String
  Address: string
  Address2: string
  City: string
  State: String
  ZipCode: String
  Subscribe: number
}

@Injectable()
export class AuthenticationService {
  private token: string
  private baseServerURL:string = "http://localhost:3000"

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(this.baseServerURL + "/users/register", user);
  }

  public finisRegister(customer: TokenPayload2): Observable<any>{
    return this.http.post(this.baseServerURL + "/users/customer-register", customer);
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(this.baseServerURL + "/users/login", user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      })
    )

    return request
  }

  public profile(): Observable<any> {
    return this.http.get(this.baseServerURL + "/users/profile", {
      headers: { Authorization: `${this.getToken()}` }
    })
  }

  public logout(): void {
    this.token = '' 
    window.localStorage.removeItem('usertoken')
    /* this.router.navigateByUrl('/') */
  }

  public getAllUser(): Observable<any> {
    return this.http.get(this.baseServerURL + "/users/edit-user", {
      headers: { Authorization: `${this.getToken()}` }
    })
  }

  public getUserDetailsByID(UserPK: number):  Observable<any> {
    return this.http.get(this.baseServerURL + "/users/get-user-details/" + UserPK)
  }

  public updateUserDetail(UserPK:number, userDetails: UserDetails): Observable<any>{
    return this.http.put(this.baseServerURL + "/users/get-user-details/" + UserPK, userDetails);
  }

  public updateUserPassword(UserPK:number, userDetails: UserDetails): Observable<any>{
    return this.http.put(this.baseServerURL + "/users/reset-password/" + UserPK, userDetails);
  }  

}