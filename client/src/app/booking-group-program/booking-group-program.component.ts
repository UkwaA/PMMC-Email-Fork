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
      AldultQuantity: ['', [Validators.required, Validators.max(35)]],
      Age57Quantity: ['', [Validators.required, Validators.max(35)]],
      Age810Quantity: ['', [Validators.required, Validators.max(35)]],
      Age1113Quantity: ['', [Validators.required, Validators.max(35)]],
      ScoutProgram: ['', Validators.required],
      EducationFK: ['', Validators.required],
      OrganizationName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherEmail: ['', [Validators.required, Validators.email]],
      TeacherPhoneNo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(10)]],
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