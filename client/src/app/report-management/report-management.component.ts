import {Component, OnInit, Input, Inject} from '@angular/core';
import { ProgramServices } from '../services/program.services'
import { ReportServices } from '../services/report.services'
import { MatTableModule } from '@angular/material/table';
import { Sort } from '@angular/material';
import { AuthenticationService } from '../authentication.service';
import { Observable, Observer } from 'rxjs';

export interface PeriodicElement {
  year: number;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
}

const PAYMENT_DATA: PeriodicElement[] = [
  {year: 2020, jan: 4000, feb: 5000, mar: 6000, apr: 7000, may: 8000, jun:2345, jul: 9000, aug: 10000, sep: 11000, oct: 1000, nov: 2345, dec: 1234},
  {year: 2019, jan: 7000, feb: 2000, mar: 3000, apr: 2000, may: 4000, jun:6345, jul: 9000, aug: 10000, sep: 11000, oct: 1000, nov: 2345, dec: 1234},
  {year: 2018, jan: 9000, feb: 6000, mar: 7000, apr: 8000, may: 2000, jun:5345, jul: 9000, aug: 10000, sep: 11000, oct: 1000, nov: 2345, dec: 1234},
];

@Component({
    selector: 'report-management',
    templateUrl: './report-management.component.html',
    styleUrls: ['./report-management.component.css'],
})

export class ReportManagementComponent {
  displayedColumns: string[] = ['year', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  PaymentDataSource = PAYMENT_DATA;
  MonthlyDataSourceField:any = []

  //Define variables for date picker
  endYear:Date = (new Date())
  startYear:Date = (new Date())
  steps = 1;
  isFormValid = true;
  endYearErrorMessage =  '';

  constructor( public reportServices: ReportServices
  ) {};

  ngOnInit() {
    this.endYearErrorMessage = ''
    this.isFormValid = true;
    this.startYear.setFullYear(this.endYear.getFullYear() - 3);
    this.reportServices.getReservationsByYearRange(this.startYear.getFullYear(), this.endYear.getFullYear())
      .subscribe(result =>{
        this.MonthlyDataSourceField = result;
      })

  }

  onChangeStartDate(event){
    if(event > this.endYear){
      this.endYear = event;
    }     
    this.isFormValid = true;
  };

  onChangeEndDate(event){
    if(event < this.startYear){
      this.endYearErrorMessage = "End Year must be after Start Year";
      this.isFormValid = false;
		}      
		else{
      this.endYearErrorMessage = "";
      this.isFormValid = true;
    } 
  };

  viewMonthlyReport(){
    if(!this.isFormValid){
        return
    }
    else{
      this.reportServices.getReservationsByYearRange(this.startYear.getFullYear(), this.endYear.getFullYear())
      .subscribe(result =>{
        this.MonthlyDataSourceField = result;
      })
    }
  }

}
