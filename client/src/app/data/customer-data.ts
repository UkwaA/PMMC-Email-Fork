export class CustomerData {
    CustomerPK: number
    FirstName: string
    LastName: string
    PhoneNo: string
    StreetAddress: string
    StreetAddress2: string
    City: string
    State: string
    ZipCode: String
    Subscribe: number

    constructor(nUserPK:number, nFirstName:string, nLastName:string, nPhone_No:string, 
        nStreet_Address: string, nStreet_Address2: string, nCity: string, nState: string, 
        nZipCode: String, nSubscribe: number){
        
        this.CustomerPK = nUserPK;
        this.FirstName = nFirstName;
        this.LastName = nLastName;
        this.PhoneNo = nPhone_No;
        this.StreetAddress = nStreet_Address;
        this.StreetAddress2 = nStreet_Address2;
        this.City = nCity;
        this.State = nState;
        this.ZipCode = nZipCode;
        this.Subscribe = nSubscribe;
    }
}