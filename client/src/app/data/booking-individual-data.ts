export class BookingIndividualData {
    GroupProgramPK: number;
    ProgramFK: number;
    ParticipateName: boolean;
    ParticipateAge: boolean;
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
    FullAmount: boolean;
    CreatedBy: boolean;
    CreatedDate: boolean;
    
    constructor (ParticipateName: boolean, ParticipateAge: boolean, Gender: boolean, MerchSize: boolean, AllergyInfo: boolean, 
        SpecialInfo: boolean, InsureProviderName: boolean, InsureRecipientName: boolean, InsurePolicyNo: boolean, InsurePhoneNo: boolean,
        AuthorizedPickupName1: boolean, AuthorizedPickupPhone1: boolean, AuthorizedPickupName2: boolean, AuthorizedPickupPhone2: boolean,
        EarlyDropOff: boolean, LatePickup: boolean, MediaRelease: boolean, EmergencyMedicalRelease: boolean, LiabilityAgreement: boolean,
        FullAmount: boolean, CreatedBy: boolean, CreatedDate: boolean){
            this.ParticipateName = ParticipateName;
            this.ParticipateAge = ParticipateAge;
            this.Gender = Gender;
            this.MerchSize = MerchSize;
            this.AllergyInfo = AllergyInfo;
            this.SpecialInfo = SpecialInfo;
            this.InsureProviderName = InsureProviderName;
            this.InsureRecipientName = InsureRecipientName;
            this.InsurePolicyNo = InsurePolicyNo;
            this.InsurePhoneNo = InsurePhoneNo;
            this.AuthorizedPickupName1 = AuthorizedPickupName1;
            this.AuthorizedPickupPhone1 = AuthorizedPickupPhone1;
            this.AuthorizedPickupName2 = AuthorizedPickupName2;
            this.AuthorizedPickupPhone2 = AuthorizedPickupPhone2;
            this.EarlyDropOff = EarlyDropOff;
            this.LatePickup = LatePickup;
            this.MediaRelease = MediaRelease;
            this.EmergencyMedicalRelease = EmergencyMedicalRelease;
            this.LiabilityAgreement = LiabilityAgreement;
            this.FullAmount = FullAmount;
            this.CreatedBy = CreatedBy;
            this.CreatedDate = CreatedDate;

        
    }
}