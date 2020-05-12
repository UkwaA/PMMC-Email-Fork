export class ReservationIndividualDetails {
  ReservationPK: number;
  ParticipantName: string;
  ParticipantAge: number;
  Gender: string;
  MerchSize: string;
  AllergyInfo: string;
  SpecialInfo: string;
  InsureProviderName: string;
  InsureRecipientName: string;
  InsurePolicyNo: string;
  InsurePhoneNo: string;
  AuthorizedPickupName1: string;
  AuthorizedPickupPhone1: string;
  AuthorizedPickupName2: string;
  AuthorizedPickupPhone2: string;
  EarlyDropOff: string;
  LatePickup: string;
  MediaRelease: boolean;
  EmergencyMedicalRelease: boolean;
  LiabilityAgreement: boolean;
  
  constructor (){
      this.ReservationPK = 0;
      this.ParticipantName = "";
      this.ParticipantAge = 0;
      this.Gender = "";
      this.MerchSize ="";
      this.AllergyInfo = "";
      this.SpecialInfo = "";
      this.InsureProviderName = "";
      this.InsureRecipientName = "";
      this.InsurePolicyNo = "";
      this.InsurePhoneNo = "";
      this.AuthorizedPickupName1 = "";
      this.AuthorizedPickupPhone1 = "";
      this.AuthorizedPickupName2 = "";
      this.AuthorizedPickupPhone2 ="";
      this.EarlyDropOff = "";
      this.LatePickup = "";
      this.MediaRelease = false;
      this.EmergencyMedicalRelease = false;
      this.LiabilityAgreement = false;
  }
}