import { Component, OnInit } from '@angular/core';
import { BookingGroupData } from '../data/booking-group-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramServices } from 'src/app/services/program.services';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';

@Component({
  selector: 'app-booking-group-program',
  templateUrl: './booking-group-program.component.html',
  styleUrls: ['./booking-group-program.component.css']
})
export class BookingGroupProgramComponent implements OnInit {
  bookingGroup: BookingGroupData;
  registerForm: FormGroup;
  submitted = false;
  ProgramPK: number;
  programDetails: ProgramData;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: ProgramServices) { }

  ngOnInit() {
    // Get Group Program Requirement
    this.route.params.subscribe(val => {
      this.ProgramPK = val.id
    })
    this.service.getProgramRequirementDetails('g', this.ProgramPK)
      .subscribe(program => {
        this.bookingGroup = program
        console.log(this.bookingGroup)
      })
    this.service.getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe(details => {
        this.programDetails = details;
        console.log(this.programDetails);
      })

    // this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.registerForm = this.fb.group({
      AldultQuantity: ['',[Validators.required, Validators.max(35)]],
      Age57Quantity: ['', [Validators.required, Validators.max(35)]],
      Age810Quantity: ['', [Validators.required, Validators.max(35)]],
      Age1112Quantity: ['', [Validators.required, Validators.max(35)]],
      Age1314Quantity: ['', [Validators.required, Validators.max(35)]],
      Age1415Quantity: ['', [Validators.required, Validators.max(35)]],
      Age1517Quantity: ['', [Validators.required, Validators.max(35)]],
      ProgramRestriction: ['', Validators.required],
      OrganizationName: ['', [Validators.required, Validators.minLength(3)]],
      GradeLevel: ['', Validators.required],
      TeacherName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherEmail: ['', [Validators.required, Validators.email]],
      TeacherPhoneNo: ['', [Validators.required, Validators.minLength(10)]],
      TotalQuantity: ['', Validators.required]

    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log("submitted");

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
      return;
    }

    console.log("valid");
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}