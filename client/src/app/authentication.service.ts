import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router'
import {UserData} from './data/user-data'
import { AppConstants } from './constants'

export interface UserDetails {
    UserPK: number
    Username: string
    Password: string
    Role_FK: string
    Email: string
    IsActive: boolean
    exp: number
    iat: number
}

export interface UserSecretData {
    UserPK: number
    currentPassword: string
    newPassword: string
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


@Injectable()
export class AuthenticationService {
  private token: string
  public registeredPK: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
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
    const user = this.getUserDetails();
    if (user) {
      if(user.exp > Date.now() / 1000) {
        return true;
      } else {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        window.localStorage.removeItem('QuantityFormLocal');
        window.localStorage.removeItem('ReservationGroupLocal');
        this.router.navigateByUrl('/');
        return false;
      }
    } else {
      return false
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
      base = this.http.post(AppConstants.EXPRESS_SERVER_URL  + "users" + `/${type}`, user);
    } else {
      base = this.http.get(AppConstants.EXPRESS_SERVER_URL  + "users" + `/${type}`, { headers: { Authorization: `${this.getToken()}` }});
    }
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('usertoken');
    window.localStorage.removeItem('QuantityFormLocal');
    window.localStorage.removeItem('ReservationGroupLocal');
    this.router.navigateByUrl('/')     
  }

  public getAllUser(): Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL  + "users/edit-user", {
      headers: { Authorization: `${this.getToken()}` }
    })
  }

  public getUserDetailsByID(UserPK: number):  Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL  + "users/get-user-details/" + UserPK)
  }

  public updateUserDetail(UserPK:number, userDetails: UserData): Observable<any>{
    return this.http.put(AppConstants.EXPRESS_SERVER_URL  + "users/get-user-details/" + UserPK, userDetails);
  }

  public resetUserPassword(UserPK:number, userDetails: UserDetails): Observable<any>{
    return this.http.put(AppConstants.EXPRESS_SERVER_URL  + "users/reset-password/" + UserPK, userDetails);
  }  

  public changeCurrentPassword(UserPK:number, userDetails: UserSecretData): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + "users/change-current-password/" + UserPK, userDetails);
  }

  public setUserActiveStatus(UserPK: number, IsActive: boolean):  Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL  + "users/set-user-status/" + UserPK + "/" + IsActive);
  }
}