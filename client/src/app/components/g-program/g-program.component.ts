import { Component, OnInit } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingGroupData } from 'src/app/data/booking-group-data';


@Component({
  selector: 'g-program',
  templateUrl: './g-program.component.html',
  styleUrls: ['./g-program.component.css']
})
export class GProgramComponent implements OnInit {

  bookingGroup: BookingGroupData;
  varLabels:Array<Object>;
  //TODO: inject the service
  constructor(private service:ProgramServices) { }

  ngOnInit() {
    this.bookingGroup = new BookingGroupData(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,false, false);
    this.varLabels = [
      {var: this.bookingGroup.AdultQuantity, label: "Adult Quantity"},
      {var: this.bookingGroup.Age57Quantity, label: "Age 5-7 Quantity"}
    ]
  }
}
