import { Component, OnInit } from '@angular/core';
import { BookingGroupData } from '../data/booking-group-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-group-program',
  templateUrl: './booking-group-program.component.html',
  styleUrls: ['./booking-group-program.component.css']
})
export class BookingGroupProgramComponent implements OnInit {
  bookingGroup: BookingGroupData;
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.registerForm = this.fb.group({
      AldultQuantity: ['', Validators.required],
      Age57Quantity: ['', Validators.required],
      Age810Quantity: ['', Validators.required],
      Age1113Quantity: ['', Validators.required],
      ScoutProgram: ['', Validators.required],
      EducationFK: ['', Validators.required],
      OrganizationName: ['', Validators.required],
      TeacherName: ['', Validators.required],
      TeacherEmail: ['', [Validators.required, Validators.email]],
      TeacherPhoneNo: ['', Validators.required],
      GradeLevel: ['', Validators.required],
      TotalQuantity: ['', Validators.required],
      ProgramRestriction: ['', Validators.required]

    });
  }
  
  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}