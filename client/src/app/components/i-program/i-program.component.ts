import { Component, OnInit, Input, Output} from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';

@Component({
  selector: 'i-program',
  templateUrl: './i-program.component.html',
  styleUrls: ['./i-program.component.css']
})
export class IProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  @Output() bookingIndividual: BookingIndividualData;
  varLabels:Array<Object>;
 
  //TODO: inject the service
  constructor(private service:ProgramServices) { }

  ngOnInit() {
    this.bookingIndividual = new BookingIndividualData(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,false);
    this.varLabels = [
      {var: this.bookingIndividual.ParticipateName , label: "Participant Name"},
      {var: this.bookingIndividual.ParticipateAge , label: "Participant Age"},
      {var: this.bookingIndividual. Gender , label: "Gender"},
      {var: this.bookingIndividual.MerchSize , label: "T-Shirt Size"},
      {var: this.bookingIndividual.AllergyInfo , label: "Allergy Information"},
      {var: this.bookingIndividual.SpecialInfo , label: "Special Information"},
      {var: this.bookingIndividual.InsureProviderName , label: "Insurance Provider Name"},
      {var: this.bookingIndividual.InsureRecipientName , label: "Insured Recipient Name"},
      {var: this.bookingIndividual.InsurePolicyNo , label: "Insurance Policy Number"},
      {var: this.bookingIndividual.InsurePhoneNo , label: "Insurance Phone Number"},
      {var: this.bookingIndividual.AuthorizedPickupName1 , label: "Authorized Pickup Name 1"},
      {var: this.bookingIndividual.AuthorizedPickupPhone1 , label: "Authorized Pickup Phone 1"},
      {var: this.bookingIndividual.AuthorizedPickupName2 , label: "Authorized Pickup Name 2"},
      {var: this.bookingIndividual.AuthorizedPickupPhone2 , label: "Authorized Pickup Phone 2"},
      {var: this.bookingIndividual.EarlyDropOff , label: "Early Drop Off"},
      {var: this.bookingIndividual.LatePickup , label: "Late Pick-up"},
      {var: this.bookingIndividual.MediaRelease , label: "Media Release"},
      {var: this.bookingIndividual.EmergencyMedicalRelease , label: "Emergency Medical Release"},
      {var: this.bookingIndividual.LiabilityAgreement , label: "Liability Agreement"},
      {var: this.bookingIndividual.FullAmount , label: "Full Amount"}
    ]
  }
}
