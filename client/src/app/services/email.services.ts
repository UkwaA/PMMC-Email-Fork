import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable(
  {providedIn: "root"}
)
export class EmailService {
  private expressBaseUrl: string = "http://localhost:3000"
  test = "Testing"
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: "Subrat" });
  }

  public sendEmail(data) {
    return this.http.post(this.expressBaseUrl + '/service/sendmail', data);
  }
}