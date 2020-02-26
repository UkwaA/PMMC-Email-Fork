import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs'

@Injectable(
  {providedIn: "root"}
)
export class EmailService {
  private expressBaseUrl: string = "http://localhost:3000"
  test = "Testing"
  constructor(private http: HttpClient) {}
 

  public sendContactEmail(data)  {
    return this.http.post(this.expressBaseUrl + '/service/send-contact-email', data);
  }

  public sendResetPasswordEmail(userInfo): Observable<any>{
    return this.http.post(this.expressBaseUrl + '/service/send-reset-password-email', userInfo);
  }

}