import {Component, OnInit, Input, Inject, ViewChild, ElementRef} from '@angular/core';
import { ProgramServices } from '../services/program.services'
import { ReportServices } from '../services/report.services'
import { MatTableModule } from '@angular/material/table';
import { Sort } from '@angular/material';
import { AuthenticationService } from '../authentication.service';
import { Observable, Observer } from 'rxjs';
import * as xlsx from 'xlsx';

export interface PeriodicElement {
  no: number;
  program: string;
  start: string;
  end: string;
  name: string;
  age: number;
  gender: string;
  merchSize: string;
  allergy: string;
  special: string;
  insureProviderName: string;
  insurePolicyNo: number;
  insurePhoneNo: number;
  authoName1: string;
  authoPhone1: number;
  authoName2: string;
  authoPhone2:number;
  earlyDropOff:string;
  latePickUp:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, program: 'Camp Pinniped', start: '5/1/2020', end:'5/6/2020', name: 'Alex', age: 11, gender: 'male', merchSize: 'medium', allergy: 'N/a', special: 'N/a', insureProviderName: 'Medical', insurePolicyNo: 123456789, insurePhoneNo: 7149999999, authoName1: 'Annie Nguyen', authoPhone1: 7144567899, authoName2: 'Peter Tran', authoPhone2: 9494561231, earlyDropOff:'N/a', latePickUp:'N/a'},
  {no: 2, program: 'Marine Mammal Rehabilitation and Research Lab', start: '5/1/2020', end:'5/6/2020', name: 'Mie', age: 8, gender: 'female', merchSize: 'small', allergy: 'N/a', special: 'N/a', insureProviderName: 'Medical', insurePolicyNo: 123456789, insurePhoneNo: 7149999999, authoName1: 'Mary Nguyen', authoPhone1: 7144567899, authoName2: 'Ryan Tran', authoPhone2: 9494561231, earlyDropOff:'N/a', latePickUp:'N/a'},

]

@Component({
    selector: 'report-management',
    templateUrl: './report-management.component.html',
    styleUrls: ['./report-management.component.css'],
})

export class ReportManagementComponent {
  displayedColumns: string[] = ['name','year', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 'total'];
  campColumns: string[] = ['no', 'program', 'start', 'end', 'name', 'age', 'gender', 'merchSize', 'allergy', 'special', 'insureProviderName', 'insurePolicyNo', 'insurePhoneNo', 'authoName1', 'authoPhone1','authoName2', 'authoPhone2','earlyDropOff','latePickUp']  
  steps = 1;
  MonthlyDataSourceField:any = [];
  PaymentDataSource: any = [];
  CampDataSource = ELEMENT_DATA;

  @ViewChild('PAYMENT',  { static: false }) payment: ElementRef;
  @ViewChild('MONTHLY',{ static: false }) monthly: ElementRef;
  @ViewChild('CAMP',{ static: false}) camp: ElementRef;

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

  viewCampReport(){}

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

  exportToExcelCamp() {
    const ws: xlsx.WorkSheet =   
    xlsx.utils.table_to_sheet(this.monthly.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'camp_program_report.xlsx');
  }

}
