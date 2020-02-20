import { Component, OnInit } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';

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
  }
}
