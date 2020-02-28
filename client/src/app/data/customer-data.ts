export class CustomerData {
    CustomerPk: number
    First_Name: string
    Last_Name: string
    Phone_Num: string
    Street_Address: string
    Street_Address2: string
    City: string
    State: string
    Zip_Code: String
    Subscribe: boolean

    constructor(nUserPK:number, nFirstName:string, nLastName:string, nPhone_Num:string, 
        nStreet_Address: string, nStreet_Address2: string, nCity: string, nState: string, 
        nZipCode: String, nSubscribe: boolean){
        
        this.CustomerPk = nUserPK;
        this.First_Name = nFirstName;
        this.Last_Name = nLastName;
        this.Phone_Num = nPhone_Num;
        this.Street_Address = nStreet_Address;
        this.Street_Address2 = nStreet_Address2;
        this.City = nCity;
        this.State = nState;
        this.Zip_Code = nZipCode;
        this.Subscribe = nSubscribe;
    }
}