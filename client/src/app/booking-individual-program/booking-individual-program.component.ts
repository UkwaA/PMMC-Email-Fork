import { Component, OnInit } from '@angular/core';
import { BookingIndividualData } from '../data/booking-individual-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { ProgramServices } from 'src/app/services/program.services';
import { ProgramData } from '../data/program-data';

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
  
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ProgramServices) { }

  ngOnInit() {
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
      })
    })


    // this.bookingIndividual = new BookingIndividualData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true,true, true);
    this.registerForm = this.fb.group({
      ParticipateName: ['', [Validators.required, Validators.minLength(3)]],
      ParticipateAge: ['', Validators.required],
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
      InsurePhoneNo: ['',[Validators.required, Validators.minLength(10)]],
      AuthorizedPickupName1: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone1: ['',[Validators.required, Validators.minLength(10)]],
      AuthorizedPickupName2: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone2: ['',[Validators.required, Validators.minLength(10)]],
      EarlyDropOff: ['', Validators.required],
      LatePickup: ['', Validators.required]

    });
  }

  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    console.log("submitted");

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
}
