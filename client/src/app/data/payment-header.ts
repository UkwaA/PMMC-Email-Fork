export class PaymentHeader {
    PaymentPK: number;
    ReservationPK: number;
    UserPK: number;
    RemainBalance: number;
    Total: number;  
    
    constructor() {
        this.PaymentPK = 0;
        this.ReservationPK = 0;
        this.UserPK = 0;
        this.RemainBalance = 0;
        this.Total = 0;
      }
}