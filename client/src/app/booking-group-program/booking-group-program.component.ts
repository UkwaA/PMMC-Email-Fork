import { Component, OnInit,Input } from '@angular/core';
import { BookingGroupData } from '../data/booking-group-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramServices } from 'src/app/services/program.services';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ReservationHeaderData } from '../data/reservation-header-data';
import { AuthenticationService } from '../authentication.service';

declare var $: any;

@Component({
  selector: 'app-booking-group-program',
  templateUrl: './booking-group-program.component.html',
  styleUrls: ['./booking-group-program.component.css']
})

export class BookingGroupProgramComponent implements OnInit {
  @Input() quantityForm: ReservationHeaderData;
  bookingGroup: BookingGroupData;
  registerForm: FormGroup;
  submitted = false;
  ProgramPK: number;
  programDetails: ProgramData;
  total: number;
  num_submits: number;
  edit_clicked:boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private auth: AuthenticationService,
              private service: ProgramServices) { }

  ngOnInit() {
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
      })
    this.service.getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe(details => {
        this.programDetails = details;
        document.getElementById("program_name").innerHTML = this.programDetails.Name;
      })

      document.getElementById("edit_btn").style.visibility="hidden";


    // this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.registerForm = this.fb.group({
      ProgramRestriction: ['', Validators.required],
      OrganizationName: ['', [Validators.required, Validators.minLength(3)]],
      GradeLevel: ['', Validators.required],
      TeacherName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherEmail: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]],
      TeacherPhoneNo: ['', [Validators.required, Validators.min(1000000000)]],
    });

    this.setRegisterFormValidators()

  }

  setRegisterFormValidators(){
    const ProgRestrictionControl = this.registerForm.get('ProgramRestriction');
    const OrgNameControl = this.registerForm.get('OrganizationName');
    const GradeLevelControl = this.registerForm.get('GradeLevel');
    const TeacherNameControl = this.registerForm.get('TeacherName');
    const TeacherEmailControl = this.registerForm.get('TeacherEmail');
    const TeacherPhoneNoControl = this.registerForm.get('TeacherPhoneNo');

    if (this.bookingGroup.ProgramRestriction != true)
      ProgRestrictionControl.setValidators(null);
    if (this.bookingGroup.OrganizationName != true)
      OrgNameControl.setValidators(null);
    if (this.bookingGroup.GradeLevel != true)
      GradeLevelControl.setValidators(null);
    if (this.bookingGroup.TeacherName != true)
      TeacherNameControl.setValidators(null);
    if (this.bookingGroup.TeacherEmail != true)
      TeacherEmailControl.setValidators(null);
    if (this.bookingGroup.TeacherPhoneNo != true)
      TeacherPhoneNoControl.setValidators(null);
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

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
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