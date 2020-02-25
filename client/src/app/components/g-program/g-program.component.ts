import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingGroupData } from 'src/app/data/booking-group-data';


@Component({
  selector: 'g-program',
  templateUrl: './g-program.component.html',
  styleUrls: ['./g-program.component.css']
})
export class GProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  @Output() data: EventEmitter<any> = new EventEmitter();
  bookingGroup: BookingGroupData;
  varLabels:Array<Object>;
  //TODO: inject the service

  constructor(private service:ProgramServices) { }

  ngOnInit() {
    this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true, true);
    this.varLabels = [
      {var: this.bookingGroup.AdultQuantity, label: "Adult Quantity"},
      {var: this.bookingGroup.Age57Quantity, label: "Age 5-7 Quantity"},
      {var: this.bookingGroup.Age810Quantity ,label: "Age 8-10 Quantity"},
      {var: this.bookingGroup.Age1113Quantity ,label: "Age 11-13 Quantity"},
      {var: this.bookingGroup.TotalQuantity ,label: "Total Quantity"},
      {var: this.bookingGroup.Price ,label: "Price"},
      {var: this.bookingGroup.Deposit ,label: "Deposit"},
      {var: this.bookingGroup.EducationFK ,label: "Education Content"},
      {var: this.bookingGroup.ProgramRestriction ,label: "Program Restriction"},
      {var: this.bookingGroup.DepositAmount ,label: "Deposit Amount"},
      {var: this.bookingGroup.FullAmount ,label: "Full Amount"},
      {var: this.bookingGroup.MaximumParticipant ,label: "Maximum Participant"},
      {var: this.bookingGroup.OrganizationName ,label: "Organization Name"},
      {var: this.bookingGroup.GradeLevel ,label: "Grade Level"},
      {var: this.bookingGroup.ScoutProgram ,label: "Scout Program"},
      {var: this.bookingGroup.TeacherName ,label: "Teacher Name"},
      {var: this.bookingGroup.TeacherEmail ,label: "Teacher Email"},
      {var: this.bookingGroup.TeacherPhoneNo ,label: "Teacher Phone Number"}
    ]
  }

  //check the data of checklist button
  check(){
    console.log(this.bookingGroup);
  }

  onItemChange(value){
    console.log(" Value is : ", value );
  }

  updateProgram() {
    console.log(this.bookingGroup)
  }
}
