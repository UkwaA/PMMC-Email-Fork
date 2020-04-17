import { Component, OnInit } from '@angular/core';
import { BookingGroupData } from '../data/booking-group-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramServices } from 'src/app/services/program.services';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ReservationHeaderData } from '../data/reservation-header-data';
import { AuthenticationService } from '../authentication.service';
import { ValidationErrors } from '@angular/forms';
import { DataStorage } from "../services/dataProvider";
import { ReservationGroupDetails } from "../data/reservation-group-details";

declare var $: any;

/**********************************************************
 Booking a Group Program will associate below tables:
  - ReservationHeader
  - ReservationGroupDetails
  - PaymentHeader 
  - MarketingInformation                                    
**********************************************************/
@Component({
  selector: 'app-booking-group-program',
  templateUrl: './booking-group-program.component.html',
  styleUrls: ['./booking-group-program.component.css']
})

export class BookingGroupProgramComponent implements OnInit {
  reservationHeader : ReservationHeaderData;
  reservationGroupDetails = new ReservationGroupDetails();
  bookingGroup: BookingGroupData;
  registerForm: FormGroup;
  submitted = false;
  ProgramPK: number;
  programDetails: ProgramData;
  total: number;
  num_submits: number;
  edit_clicked:boolean;
  quantityForm: any

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private auth: AuthenticationService,
              private service: ProgramServices,
              private _data: DataStorage) { }

  ngOnInit() {
    $('body,html').animate({
      scrollTop: 0
  }, 800);
    // Get QuantityForm from Local Storage
    // Clear the Local Storage after finish checking out
    this.quantityForm = JSON.parse(localStorage.getItem('quantityForm'));
    
    this.registerForm = this.fb.group({
      ProgramRestriction: ['', Validators.required],
      OrganizationName: ['', [Validators.required, Validators.minLength(3)]],
      GradeLevel: ['', Validators.required],
      TeacherName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherEmail: [''],
      TeacherPhoneNo: ['', [Validators.required, Validators.min(1000000000)]],
    });

    // Process data for ReservationHeader
    this.reservationHeader = new ReservationHeaderData(this.quantityForm.SchedulePK, 
                                                        this.auth.getUserDetails().UserPK, 
                                                        this.quantityForm.TotalQuantity)

    this.bookingGroup= <any>{};
    this.total = 0;
    this.num_submits = 0;
    // Get Group Program Requirement
    this.route.params.subscribe(val => {
      this.ProgramPK = val.id
    })

    this.service.getProgramRequirementDetails('g', this.ProgramPK)
      .subscribe(program => {
        this.bookingGroup = program
        console.log(this.bookingGroup)
        this.setRegisterFormValidators()
      })
    this.service.getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe(details => {
        this.programDetails = details;
        document.getElementById("program_name").innerHTML = this.programDetails.Name;
      })

      document.getElementById("edit_btn").style.visibility="hidden";
  }

  setRegisterFormValidators(){
    const ProgRestrictionControl = this.registerForm.get('ProgramRestriction');
    const OrgNameControl = this.registerForm.get('OrganizationName');
    const GradeLevelControl = this.registerForm.get('GradeLevel');
    const TeacherNameControl = this.registerForm.get('TeacherName');
    const TeacherEmailControl = this.registerForm.get('TeacherEmail');
    const TeacherPhoneNoControl = this.registerForm.get('TeacherPhoneNo');

    if (this.bookingGroup.ProgramRestriction != true)
      ProgRestrictionControl.clearValidators();
    if (this.bookingGroup.OrganizationName != true){
      OrgNameControl.clearValidators();
    }
    if (this.bookingGroup.GradeLevel != true)
      GradeLevelControl.clearValidators();
    if (this.bookingGroup.TeacherName != true)
      TeacherNameControl.clearValidators();
    if (this.bookingGroup.TeacherEmail == true){
      console.log("TeacherEmail");
      // TeacherEmailControl.clearValidators();
      TeacherEmailControl.setValidators([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]);
    }
    if (this.bookingGroup.TeacherPhoneNo != true)
      TeacherPhoneNoControl.clearValidators();

    ProgRestrictionControl.updateValueAndValidity();
    OrgNameControl.updateValueAndValidity();
    GradeLevelControl.updateValueAndValidity();
    TeacherNameControl.updateValueAndValidity();
    TeacherEmailControl.updateValueAndValidity;
    TeacherPhoneNoControl.updateValueAndValidity();

  }

  get f() { return this.registerForm.controls; }

  editClicked(event){
    console.log("Edit Clicked");
    document.getElementById("edit_btn").style.visibility="hidden";
    this.num_submits = 0;
    $(document).ready(function(){
      $("#registerForm :input").prop("disabled", false);
      $('body,html').animate({
        scrollTop: 0
    }, 800);
    });
    document.getElementById("final_warning").innerHTML = ""
  }

  getFormValidationErrors() {
    Object.keys(this.registerForm.controls).forEach(key => {
  
    const controlErrors: ValidationErrors = this.registerForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
      this.getFormValidationErrors();
      return;
    }
    ++this.num_submits;
    console.log(this.num_submits);

    if (this.num_submits==1){
      $(document).ready(function(){
        $("#registerForm :input").prop("disabled", true);
        $("#registerForm :button").prop("disabled", false);
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        $('#submit_btn').text('Confirm');
      });
      // document.getElementById("submit_btn").innerHTML="Confirm";
      document.getElementById("edit_btn").style.visibility="visible";
      document.getElementById("final_warning").innerHTML = "*Please confirm that the following information is correct.".fontcolor("orange");
    }
    else if (this.num_submits==2){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      //route to the payment page
    this.router.navigateByUrl("/payment/" + this.ProgramPK );
    }

    console.log("submitted");
    

    console.log("valid");

  }
}