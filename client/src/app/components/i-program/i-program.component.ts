import { Component, OnInit } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';

@Component({
  selector: 'i-program',
  templateUrl: './i-program.component.html',
  styleUrls: ['./i-program.component.css']
})
export class IProgramComponent implements OnInit {

  bookingIndividual: BookingIndividualData;
 
  //TODO: inject the service
  constructor(private service:ProgramServices) { }

  ngOnInit() {
    this.bookingIndividual = new BookingIndividualData(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,false);
  }

  getVar(varName:string):string{
    return "bookingIndividual." + varName;
  }
}
