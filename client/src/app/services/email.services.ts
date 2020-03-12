import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs'
import { AppConstants } from '../constants'

@Injectable(
  {providedIn: "root"}
)
export class EmailService {
  constructor(private http: HttpClient) {}

  public sendContactEmail(data)  {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-contact-email', data);
  }

  public sendResetPasswordEmail(userInfo): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-reset-password-email', userInfo);
  }

  public ValidPasswordToken(body): Observable<any>{    
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/reset-password/' + body.resettoken, body);
  }

  public sendPasswordConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-password-confirmation-email/', body);
  }

}