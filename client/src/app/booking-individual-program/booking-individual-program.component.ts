import { Component, OnInit } from '@angular/core';
import { BookingIndividualData } from '../data/booking-individual-data';

@Component({
  selector: 'app-booking-individual-program',
  templateUrl: './booking-individual-program.component.html',
  styleUrls: ['./booking-individual-program.component.css']
})
export class BookingIndividualProgramComponent implements OnInit {
  bookingIndividual: BookingIndividualData;

  constructor() { }

  ngOnInit() {
  }

}
