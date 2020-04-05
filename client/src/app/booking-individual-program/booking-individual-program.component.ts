import { Component, OnInit } from '@angular/core';
import { BookingIndividualData } from '../data/booking-individual-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramServices } from 'src/app/services/program.services';
import { ProgramData } from '../data/program-data';

declare var $: any;

@Component({
  selector: 'app-booking-individual-program',
  templateUrl: './booking-individual-program.component.html',
  styleUrls: ['./booking-individual-program.component.css']
})

export class BookingIndividualProgramComponent implements OnInit {
  bookingIndividual: BookingIndividualData;
  registerForm: FormGroup;
  submitted = false;
  ProgramPK: number;
  programDetails: ProgramData;
  num_submits: number;
  
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ProgramServices) { }

  ngOnInit() {
    this.bookingIndividual= <any>{};
    this.num_submits = 0;
    // Get Individual Program Requirement
    this.route.params.subscribe(val => { 
      this.ProgramPK = val.id 
      this.service.getProgramRequirementDetails('i', this.ProgramPK)
        .subscribe(program => {
          this.bookingIndividual = program
      })
      this.service.getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe(details =>{
        this.programDetails = details;
        document.getElementById("program_name").innerHTML = this.programDetails.Name;
        /* document.getElementById("program_desc").innerHTML = this.programDetails.Description; */
      })
    })
    document.getElementById("edit_btn").style.visibility="hidden";

    this.registerForm = this.fb.group({
      ParticipantName: ['', [Validators.required, Validators.minLength(3)]],
      ParticipantAge: ['', Validators.required],
      Gender: ['', Validators.required],
      MerchSize: ['', Validators.required],
      //AllergyInfo: ['', Validators.required],
      //SpecialInfo: ['', Validators.required],
      MediaRelease: [false, Validators.requiredTrue],
      EmergencyMedicalRelease: [false, Validators.requiredTrue],
      LiabilityAgreement: [false, Validators.requiredTrue],
      InsureProviderName: ['', [Validators.required, Validators.minLength(3)]],
      InsureRecipientName: ['', [Validators.required, Validators.minLength(3)]],
      InsurePolicyNo: ['',[Validators.required, Validators.minLength(5)]],
      InsurePhoneNo: ['',[Validators.required, Validators.min(1000000000)]],
      AuthorizedPickupName1: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone1: ['',[Validators.required, Validators.min(1000000000)]],
      AuthorizedPickupName2: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone2: ['',[Validators.required, Validators.min(1000000000)]],
      EarlyDropOff: ['', Validators.required],
      LatePickup: ['', Validators.required]

    });
    
  }

  get f() { return this.registerForm.controls;}

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
    console.log("submitted");

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
      return;
    }

    ++this.num_submits;
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
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}
