export class ReservationHeaderData {
    ReservationPK: number;
    SchedulePK: number;
    UserPK: number;
    PaymentPK: number;
    MarketingPK: number;
    Date: Date;
    PaymentStatus: boolean;
    ResevationStatus: boolean;
    NumberOfParticipant: number;
    IsActive: boolean;
    

    constructor() {
      this.ReservationPK = 0;
      this.SchedulePK = 0;
      this.UserPK = 0;
      this.PaymentPK = 0;
      this.MarketingPK = 0;
      this.Date = new Date();
      this.PaymentStatus = false;
      this.ResevationStatus = false;
      this.NumberOfParticipant = 0;
      this.IsActive = true;
    }
  }
  