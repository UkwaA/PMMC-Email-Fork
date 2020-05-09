import {Component, OnInit, Input, Inject, ViewChild, ElementRef} from '@angular/core';
import { ProgramServices } from '../services/program.services'
import { ReportServices } from '../services/report.services'
import { MatTableModule } from '@angular/material/table';
import { Sort } from '@angular/material';
import { AuthenticationService } from '../authentication.service';
import { Observable, Observer } from 'rxjs';
import * as xlsx from 'xlsx';

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

@Component({
    selector: 'report-management',
    templateUrl: './report-management.component.html',
    styleUrls: ['./report-management.component.css'],
})

export class ReportManagementComponent {
  displayedColumns: string[] = ['year', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];  
  steps = 1;
  MonthlyDataSourceField:any = [];
  PaymentDataSource: any = [];
  @ViewChild('PAYMENT',  { static: false }) payment: ElementRef;
  @ViewChild('MONTHLY',{ static: false }) monthly: ElementRef;

  //Define report tab with index
  reportIndex = {
    1: 'Payment Report',
    2: 'Monthly Report',
    3: 'Camp Program Resort',
    4: 'Monthly Master Schedule'
  }

  //Define variables for Report
  endYear:Date = (new Date());
  startYear:Date = (new Date());  
  isFormValid = true;
  YearErrorMessage =  '';

  constructor( public reportServices: ReportServices
  ) {};

  ngOnInit() {
    this.YearErrorMessage = ''
    this.isFormValid = true;
    this.startYear.setFullYear(this.endYear.getFullYear() - 3);
    
    this.reportServices.getIncomeByYearRange(this.startYear.getFullYear(), this.endYear.getFullYear())
      .subscribe(result =>{
        this.PaymentDataSource = result;
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
      this.YearErrorMessage = "End Year must be after Start Year";
      this.isFormValid = false;
		}      
		else{
      this.YearErrorMessage = "";
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

  viewPaymentReport(){
    if(!this.isFormValid){
      return    
    }
    else{
      this.reportServices.getIncomeByYearRange(this.startYear.getFullYear(), this.endYear.getFullYear())
      .subscribe(result =>{
        this.PaymentDataSource = result;
    })
    }
  }

  tabClick(event){
  }

  exportToExcelPayment() {
    const ws: xlsx.WorkSheet =   
    xlsx.utils.table_to_sheet(this.payment.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'payment_report.xlsx');
  }

  exportToExcelMonthly() {
    const ws: xlsx.WorkSheet =   
    xlsx.utils.table_to_sheet(this.monthly.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'monthly_report.xlsx');
  }

}
