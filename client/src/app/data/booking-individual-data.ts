export class BookingIndividualData {
    GroupProgramPK: number;
    ProgramFK: number;
    ParticipateName: string;
    ParticipateAge: number;
    Gender: string;
    MerchSize: string;
    AllergyInfo: string;
    SpecialInfo: string;
    InsureProviderName: string;
    InsureRecipientName: string;
    InsurePolicyNo: number;
    InsurePhoneNo: number;
    AuthorizedPickupName1: string;
    AuthorizedPickupPhone1: number;
    AuthorizedPickupName2: string;
    AuthorizedPickupPhone2: number;
    EarlyDropOff: boolean;
    LatePickup: boolean;
    MadiaRelease: boolean;
    EmergencyMedicalRelease: boolean;
    LiabilityArgreement: boolean;
    FullAmount: boolean;
    CreatedBy: string;
    CreatedDate: Date;
    
    constructor (){
        
    }
}