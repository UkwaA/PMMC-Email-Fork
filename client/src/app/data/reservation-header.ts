export class ReservationHeader {
    ReservationPK: number;
    SchedulePK: number;
    UserPK: number;
    ReservationStatus: number;
    NumberOfParticipant: number;
    Total:number;
    CreatedDate: Date;
    IsActive: boolean;
    RemainingBalance:number;
    
    constructor( ) {
      this.ReservationPK = 0;
      this.SchedulePK = 0;
      this.UserPK = 0;
      this.ReservationStatus = 0;
      this.Total = 0;
      this.NumberOfParticipant = 0;
      this.CreatedDate = new Date();
      this.IsActive = true;
      this.RemainingBalance = 0;
    }
  }
  