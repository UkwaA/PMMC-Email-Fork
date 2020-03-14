export class BookingIndividualData {
    IndividualProgramPK: number;
    ParticipantName: boolean;
    ParticipantAge: boolean;
    Gender: boolean;
    MerchSize: boolean;
    AllergyInfo: boolean;
    SpecialInfo: boolean;
    InsureProviderName: boolean;
    InsureRecipientName: boolean;
    InsurePolicyNo: boolean;
    InsurePhoneNo: boolean;
    AuthorizedPickupName1: boolean;
    AuthorizedPickupPhone1: boolean;
    AuthorizedPickupName2: boolean;
    AuthorizedPickupPhone2: boolean;
    EarlyDropOff: boolean;
    LatePickup: boolean;
    MediaRelease: boolean;
    EmergencyMedicalRelease: boolean;
    LiabilityAgreement: boolean;
    CreatedBy: number;
    CreatedDate: Date;
    
    constructor (){
        this.IndividualProgramPK = 0;
        this.ParticipantName = true;
        this.ParticipantAge = true;
        this.Gender = true;
        this.MerchSize = true;
        this.AllergyInfo = true;
        this.SpecialInfo = true;
        this.InsureProviderName = true;
        this.InsureRecipientName = true;
        this.InsurePolicyNo = true;
        this.InsurePhoneNo = true;
        this.AuthorizedPickupName1 = true;
        this.AuthorizedPickupPhone1 = true;
        this.AuthorizedPickupName2 = true;
        this.AuthorizedPickupPhone2 = true;
        this.EarlyDropOff = true;
        this.LatePickup = true;
        this.MediaRelease = true;
        this.EmergencyMedicalRelease = true;
        this.LiabilityAgreement = true;
        this.CreatedBy = 0;
        this.CreatedDate = new Date();
    }
}