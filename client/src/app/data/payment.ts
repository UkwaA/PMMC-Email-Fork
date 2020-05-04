export class Payment {
    PaymentPK: string;
    ReservationPK: number;
    UserPK: number;
    PaymentType: number;
    Total: number;  
    ChargeToken: string;  
    
    constructor() {
        this.PaymentPK = "";
        this.ReservationPK = 0;
        this.UserPK = 0;
        this.PaymentType = 0;
        this.Total = 0;
        this.ChargeToken = "";
      }
}
