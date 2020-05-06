import {Component, OnInit, Input, Inject} from '@angular/core';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
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

const MONTHLY_DATA_FIELD_TRIP: PeriodicElement[] = [
  {year: 2020, jan: 4, feb: 5, mar: 6, apr: 7, may: 8, jun:23, jul: 90, aug: 100, sep: 11, oct: 100, nov: 23, dec: 12},
  {year: 2019, jan: 7, feb: 2, mar: 3, apr: 2, may: 4, jun:63, jul: 9, aug: 100, sep: 11, oct: 10, nov: 23, dec: 134},
  {year: 2018, jan: 9, feb: 6, mar: 7, apr: 8, may: 2, jun:53, jul: 90, aug: 10, sep: 110, oct: 10, nov: 23, dec: 124},
];

const MONTHLY_DATA_GIRL_SCOUT: PeriodicElement[] = [
  {year: 2020, jan: 20, feb: 53, mar: 64, apr: 7, may: 8, jun:23, jul: 90, aug: 100, sep: 11, oct: 100, nov: 23, dec: 12},
  {year: 2019, jan: 74, feb: 22, mar: 33, apr: 2, may: 4, jun:63, jul: 9, aug: 100, sep: 11, oct: 10, nov: 23, dec: 134},
  {year: 2018, jan: 92, feb: 61, mar: 27, apr: 8, may: 2, jun:53, jul: 90, aug: 10, sep: 110, oct: 10, nov: 23, dec: 124},
];

@Component({
    selector: 'report-management',
    templateUrl: './report-management.component.html',
    styleUrls: ['./report-management.component.css'],
})

export class ReportManagementComponent {
  displayedColumns: string[] = ['year', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  PaymentDataSource = PAYMENT_DATA;
  MonthlyDataSourceField = MONTHLY_DATA_FIELD_TRIP;
  MonthlyDataSourceGirl = MONTHLY_DATA_GIRL_SCOUT;

  

    ngOnInit() {
    }
  }
