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
      {var: "AdultQuantity", label: "Adult Quantity"},
      {var: "Age57Quantity", label: "Age 5-7 Quantity"},
      {var: "Age810Quantity" ,label: "Age 8-10 Quantity"},
      {var: "Age1113Quantity" ,label: "Age 11-13 Quantity"},
      {var: "TotalQuantity" ,label: "Total Quantity"},
      {var: "Price" ,label: "Price"},
      {var: "Deposit" ,label: "Deposit"},
      {var: "EducationFK" ,label: "Education Content"},
      {var: "ProgramRestriction" ,label: "Program Restriction"},
      {var: "DepositAmount" ,label: "Deposit Amount"},
      {var: "FullAmount" ,label: "Full Amount"},
      {var: "MaximumParticipant" ,label: "Maximum Participant"},
      {var: "OrganizationName" ,label: "Organization Name"},
      {var: "GradeLevel" ,label: "Grade Level"},
      {var: "ScoutProgram" ,label: "Scout Program"},
      {var: "TeacherName" ,label: "Teacher Name"},
      {var: "TeacherEmail" ,label: "Teacher Email"},
      {var: "TeacherPhoneNo" ,label: "Teacher Phone Number"}
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
