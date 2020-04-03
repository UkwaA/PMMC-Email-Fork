import { Component, OnInit } from '@angular/core';
import { BookingGroupData } from '../data/booking-group-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramServices } from 'src/app/services/program.services';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';

declare var $: any;

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
  total: number;
  num_submits: number;
  edit_clicked:boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
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
       /*  document.getElementById("program_desc").innerHTML = this.programDetails.Description;
        console.log(this.programDetails); */
      })

      document.getElementById("edit_btn").style.visibility="hidden";


    // this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.registerForm = this.fb.group({
      AdultQuantity: [0,[Validators.required, Validators.min(1), Validators.max(35)]],
      Age57Quantity: [0, [Validators.required, Validators.max(35)]],
      Age810Quantity: [0, [Validators.required, Validators.max(35)]],
      Age1112Quantity: [0, [Validators.required, Validators.max(35)]],
      Age1314Quantity: [0, [Validators.required, Validators.max(35)]],
      Age1415Quantity: [0, [Validators.required, Validators.max(35)]],
      Age1517Quantity: [0, [Validators.required, Validators.max(35)]],
      ProgramRestriction: ['', Validators.required],
      OrganizationName: ['', [Validators.required, Validators.minLength(3)]],
      GradeLevel: ['', Validators.required],
      TeacherName: ['', [Validators.required, Validators.minLength(3)]],
      TeacherEmail: ['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$")]],
      TeacherPhoneNo: ['', [Validators.required, Validators.min(1000000000)]],
      TotalQuantity: [0, [Validators.required, Validators.max(35)]]

    });

    // $('#edit_btn').on('click', function(event) {
    // this.num_submits = 0;
    // $(document).ready(function(){
    //   $("#registerForm :input").prop("disabled", false);
    //   $('body,html').animate({ scrollTop: 0}, 800);
    //   $(this.num_submits = 0);
    // });
    // document.getElementById("final_warning").innerHTML = ""
    // });
  }

  // editClicked(event){
  //   this.num_submits=0;
  //   console.log("Edit clicked");
  // }

  onNumberChange(){
    this.total = this.registerForm.get('Age57Quantity').value + this.registerForm.get('Age810Quantity').value
     + this.registerForm.get('Age1112Quantity').value + this.registerForm.get('Age1314Quantity').value
     + this.registerForm.get('Age1415Quantity').value + this.registerForm.get('Age1517Quantity').value;
     console.log("New total" + this.total + ".");
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
    this.registerForm.get('TotalQuantity').setValue(this.total);

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
      });
      document.getElementById("edit_btn").style.visibility="visible";
      document.getElementById("final_warning").innerHTML = "<p color='red'>*Please confirm that the following information is correct.</p>"
    }
    else if (this.num_submits==2){
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    console.log("submitted");
    

    console.log("valid");
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}