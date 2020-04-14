export class ReservationHeaderData {
    ReservationPK: number;
    SchedulePK: number;
    UserPK: number;
    PaymentPK: number;
    MarketingPK: number;
    PaymentStatus: boolean;
    ResevationStatus: boolean;
    NumberOfParticipant: number;
    CreatedDate: Date;
    IsActive: boolean;
    
    constructor( 
                SchedulePK: number,
                UserPK: number,
                NumberOfParticipant: number) {
                  
      this.ReservationPK = 0;
      this.SchedulePK = SchedulePK;
      this.UserPK = UserPK;
      this.PaymentPK = 0;
      this.MarketingPK = 0;
      this.PaymentStatus = false;
      this.ResevationStatus = false;
      this.NumberOfParticipant = NumberOfParticipant;
      this.CreatedDate = new Date();
      this.IsActive = true;
    }
  }
  