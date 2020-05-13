import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConstants } from '../constants';
import { EmailData } from '../data/email-data';

@Injectable(
  {providedIn: 'root'}
)
export class EmailService {
  constructor(private http: HttpClient) {}

  public getAllEmails(): Promise<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'service/get-all-emails').toPromise();
  }

  public getUserEmails(): Promise<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'service/get-user-emails').toPromise();
  }

  public getProgramEmails(): Promise<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'service/get-program-emails').toPromise();
  }

  public getPaymentEmails(): Promise<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'service/get-payment-emails').toPromise();
  }

  public getEmailByID(emailPK: number): Observable<any> {
    return this.http.get(AppConstants.EXPRESS_SERVER_URL + 'service/get-email-by-id/' + emailPK);
  }

  public updateEmail(emailData: any): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/update-email', emailData);
  }

  public sendContactEmail(data)  {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-contact-email', data);
  }

  // Connected
  public sendResetPasswordEmail(userInfo): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-reset-password-email', userInfo);
  }

  // Connected
  public ValidPasswordToken(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/reset-password/' + body.resettoken, body);
  }

  // Connected
  public sendPasswordConfirmationEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-password-confirmation-email/', body);
  }

  // Connected
  public sendCreateNewUserConfirmationEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/create-new-user-confirmation-email/', body);
  }

  // 
  public sendBookingRequestConfirmationEmail(body): Observable<any> {
    console.log("Send booking request called");
    console.log(body);
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-booking-request-confirmation-email/', body);
  }

  // Connected
  public sendRegistrationConfirmationEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-registration-confirmation-email/', body);
  }

  public sendProgramConfirmationEmail(body): Observable<any> {
    if (body.ProgramPK == 79)
      return this.sendPinnipedProgramEmail(body);
    // else if (insert all other specific program emails)
    else
      return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-program-confirmation-email/', body);
  }

  public sendProgramReminderEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-program-reminder-email/', body);
  }

  public sendPaymentConfirmationEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-payment-confirmation-email/', body);
  }

  public sendPostProgramEmail(body): Observable<any> {
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-post-program-email/', body);
  }

  public changeEmailActiveStatus(body): Observable<any> {
    console.log('Change email called1');
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/change-email-active-status/', body);
  }

  public sendPinnipedProgramEmail(body): Observable<any> {
    console.log('Send Pinniped Called')
    return this.http.post(AppConstants.EXPRESS_SERVER_URL + 'service/send-pinniped-program-email/', body);
  }



}
