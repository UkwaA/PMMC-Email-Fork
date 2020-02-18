import { Component, OnInit } from '@angular/core';
import { BookingIndividualData } from '../data/booking-individual-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-individual-program',
  templateUrl: './booking-individual-program.component.html',
  styleUrls: ['./booking-individual-program.component.css']
})

export class BookingIndividualProgramComponent implements OnInit {
  bookingIndividual: BookingIndividualData;
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingIndividual = new BookingIndividualData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true,true, true);
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
      InsurePolicyNo: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(5)]],
      InsurePhoneNo: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(10)]],
      AuthorizedPickupName1: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone1: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(10)]],
      AuthorizedPickupName2: ['', [Validators.required, Validators.minLength(3)]],
      AuthorizedPickupPhone2: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.minLength(10)]],
      EarlyDropOff: ['', Validators.required],
      LatePickup: ['', Validators.required]

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
