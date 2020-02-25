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
    this.bookingIndividual = new BookingIndividualData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.varLabels = [
      {var: "ParticipateName" , label: "Participant Name"},
      {var: "ParticipateAge" , label: "Participant Age"},
      {var: "Gender" , label: "Gender"},
      {var: "MerchSize" , label: "T-Shirt Size"},
      {var: "AllergyInfo" , label: "Allergy Information"},
      {var: "SpecialInfo" , label: "Special Information"},
      {var: "InsureProviderName" , label: "Insurance Provider Name"},
      {var: "InsureRecipientName" , label: "Insured Recipient Name"},
      {var: "InsurePolicyNo" , label: "Insurance Policy Number"},
      {var: "InsurePhoneNo" , label: "Insurance Phone Number"},
      {var: "AuthorizedPickupName1" , label: "Authorized Pickup Name 1"},
      {var: "AuthorizedPickupPhone1" , label: "Authorized Pickup Phone 1"},
      {var: "AuthorizedPickupName2" , label: "Authorized Pickup Name 2"},
      {var: "AuthorizedPickupPhone2" , label: "Authorized Pickup Phone 2"},
      {var: "EarlyDropOff" , label: "Early Drop Off"},
      {var: "LatePickup" , label: "Late Pick-up"},
      {var: "MediaRelease" , label: "Media Release"},
      {var: "EmergencyMedicalRelease" , label: "Emergency Medical Release"},
      {var: "LiabilityAgreement" , label: "Liability Agreement"},
      {var: "FullAmount" , label: "Full Amount"}
    ]
  }

  //check in console
  check(){
    console.log(this.bookingIndividual);
  }
}
