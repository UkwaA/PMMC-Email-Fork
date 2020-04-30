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

  public CreateNewUserConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/create-new-user-confirmation-email/', body);
  }

  public SendInitialBookingConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-initial-booking-confirmation-email/', body);
  }

  public sendRegistrationConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-registration-confirmation-email/', body);
  }
  
  public sendProgramConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-program-confirmation-email/', body);
  }

  public sendProgramReminderEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-program-reminder-email/', body);
  }

  public sendPaymentConfirmationEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-payment-confirmation-email/', body);
  }

  public sendPostProgramEmail(body): Observable<any>{
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-post-program-email/', body);
  }
  
  

}