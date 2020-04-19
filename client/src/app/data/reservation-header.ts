export class ReservationHeader {
    ReservationPK: number;
    SchedulePK: number;
    UserPK: number;
    PaymentPK: number;
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
      this.ResevationStatus = false;
      this.NumberOfParticipant = NumberOfParticipant;
      this.CreatedDate = new Date();
      this.IsActive = true;
    }
  }
  